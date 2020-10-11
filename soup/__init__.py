from flask import Flask, render_template, request, redirect, url_for

from soup import config, forms

from .extensions import db, migrate
from .models import Recipe, Ingredient
from .utils import upload_file_to_s3


def create_app(config_class=config.DevConfig):
    app = Flask(__name__, static_folder="../build", static_url_path="/")
    app.config.from_object(config_class)

    with app.app_context():
        initialize_extensions(app)

    @app.route("/create_recipe", methods=["GET", "POST"])
    def create_recipe():
        req_data = request.form.to_dict()
        title = req_data.get("title")
        link = req_data.get("link")
        ingredients = req_data.get("ingredients")
        ingredients = ingredients.split(",")
        new_file = request.files.get("file")
        recipe = Recipe(title=title, link=link)
        for item in ingredients:
            item = item.strip()
            ingredient = Ingredient.get_or_create(name=item)
            recipe.ingredients.append(ingredient)
        file_url = upload_file_to_s3(file=new_file, bucket_name=app.config["S3_BUCKET"])
        recipe.image = file_url
        recipe.save()

        return {"flask_message": ""}

    @app.route("/list_recipes", methods=["GET", "POST"])
    def list_recipes():
        recipes = db.session.query(Recipe).all()
        collection = []
        for recipe in recipes:
            recipe_dict = {
                "title": recipe.title,
                "link": recipe.link,
                "ingredients": [],
                "image": recipe.image,
            }
            for ingredient in recipe.ingredients:
                recipe_dict["ingredients"].append(ingredient.name)
            collection.append(recipe_dict)
        return {"collection": collection}

    @app.route("/")
    def index():
        return app.send_static_file("index.html")

    return app


def initialize_extensions(app):
    db.init_app(app)
    migrate.init_app(app, db)
