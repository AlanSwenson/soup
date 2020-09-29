"""Models using SQLAlchemy"""
from sqlalchemy import Column


from .extensions import db


class Recipe(db.Model):
    """Soup Recipe"""

    __tablename__ = "recipe"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(120))

    link = db.Column(db.String(500))

    ingredients = db.relationship("Ingredient", backref="recipe", lazy="dynamic")

    def save(self):
        """Save Order in db"""
        db.session.add(self)
        db.session.commit()


class Ingredient(db.Model):
    """Ingredient"""

    __tablename__ = "ingredient"

    id = db.Column(db.Integer, primary_key=True)

    recipe_id = Column(db.Integer, db.ForeignKey("recipe.id"))

    name = db.Column(db.String(120))

    def save(self):
        """Save Order in db"""
        db.session.add(self)
        db.session.commit()
