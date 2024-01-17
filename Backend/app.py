
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from models import db #import models

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.get('/')
def index():
    return "Home"

@app.get('/home')
#where posts are

@app.get('/profile/<int:id>')
#where your own profile + user profiles

@app.get('/saved')
#locate your saved posts

@app.get('/login')
def user_login():
    pass
#login page **important** do not set this up until everything else is setup






if __name__ == '__main__':
    app.run(port=5555, debug=True)