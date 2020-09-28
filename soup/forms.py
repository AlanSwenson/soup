from wtforms_alchemy import model_form_factory
from wtforms import Field, widgets
from flask_wtf import FlaskForm


from soup import models
from .extensions import db

BaseModelForm = model_form_factory(FlaskForm)

class ModelForm(BaseModelForm):
    @classmethod
    def get_session(self):
        return db.session

class TagListField(Field):
    widget = widgets.TextInput()

    def _value(self):
        if self.data:
            return u', '.join(self.data)
        else:
            return u''

    def process_formdata(self, valuelist):
        if valuelist:
            self.data = [x.strip() for x in valuelist[0].split(',')]
        else:
            self.data = []

class RecipeForm(ModelForm):
    class Meta:
        model = models.Recipe
    ingredients = TagListField()


