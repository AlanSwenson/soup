from wtforms_alchemy import ModelForm

from soup import models


class RecipeForm(ModelForm):
    class Meta:
        model = models.Recipe



