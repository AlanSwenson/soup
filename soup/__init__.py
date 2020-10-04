from flask import Flask, render_template, request, redirect, url_for

from soup import config, forms

from .extensions import db, migrate
from .models import Recipe, Ingredient


def create_app(config_class=config.DevConfig):
    app = Flask(__name__, static_folder="../build", static_url_path="/")
    app.config.from_object(config_class)

    with app.app_context():
        initialize_extensions(app)

    @app.route("/message")
    def hello_world():
        return {"flask_message": "Hello, from Flask Backend!"}

    @app.route("/api", methods=["GET", "POST"])
    def api():
        req_data = request.get_json()
        print(req_data.get("ingredients"))
        title = req_data.get("title")
        link = req_data.get("link")
        ingredients = req_data.get("ingredients")
        recipe = Recipe(title=title, link=link)
        for item in ingredients:
            item = item.strip()
            ingredient = Ingredient.get_or_create(name=item)
            recipe.ingredients.append(ingredient)
        recipe.save()

        return {"flask_message": ""}

    @app.route("/")
    def index():
        return app.send_static_file("index.html")

    @app.route("/add", methods=["GET", "POST"])
    def add():
        form = forms.RecipeForm()
        if form.validate():
            if request.method == "POST":
                print(form.ingredients.data)
                print(form.title.data)
                print(form.link.data)
                print(form.data)
                s = request.form.getlist("ingredients")[1]
                ingredients = s.split(",")
                print(f"Ingredients: {ingredients}")
                recipe = Recipe(title=form.title.data, link=form.link.data)
                recipe.save()
                for item in ingredients:
                    item = item.strip()
                    ingredient = Ingredient(recipe=recipe, name=item)
                    ingredient.save()
                redirect(url_for("add"))
        return render_template("add.html", form=form)

    @app.route("/search", methods=["GET"])
    def search():
        return render_template("search.html")

    return app


def initialize_extensions(app):
    db.init_app(app)
    migrate.init_app(app, db)
