"""Models using SQLAlchemy"""
from sqlalchemy import Column, Table


from .extensions import db

association_table = Table(
    "association",
    db.Model.metadata,
    Column("recipe_id", db.Integer, db.ForeignKey("recipe.id")),
    Column("ingredient_id", db.Integer, db.ForeignKey("ingredient.id")),
)


class Recipe(db.Model):
    """Soup Recipe"""

    __tablename__ = "recipe"

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(120))

    link = db.Column(db.String(500))

    image = db.Column(db.String(500))

    ingredients = db.relationship(
        "Ingredient", secondary=association_table, back_populates="recipes"
    )

    def save(self):
        """Save Order in db"""
        db.session.add(self)
        db.session.commit()


class Ingredient(db.Model):
    """Ingredient"""

    __tablename__ = "ingredient"

    id = db.Column(db.Integer, primary_key=True)

    recipes = db.relationship(
        "Recipe", secondary=association_table, back_populates="ingredients"
    )

    name = db.Column(db.String(120))

    def save(self):
        """Save Order in db"""
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_or_create(cls, name):
        exists = (
            db.session.query(Ingredient.id).filter_by(name=name).scalar() is not None
        )
        if exists:
            return db.session.query(Ingredient).filter_by(name=name).first()
        return cls(name=name)
