
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

#USER

@app.patch('/users/<int:id>')
def patch_user(id):
    current_user = db.session.get(User, id)
    if not current_user:
        return {"error": "User not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(current_user, key, data[key])
            db.session.add(current_user)
            db.session.commit()
            return current_user.to_dict(), 202
    except Exception as e:
        print(e)
        return {"errors": ["validation errors"]}, 400

@app.delete('/users/<int:id>')
def delete_user(id):
    current_user = db.session.get(User, id) 
    if not current_user:
        return {"error": "User not found"}, 404
    db.session.delete(current_user)
    db.session.commit()
    return {}, 204


#PASSENGER POST
@app.get('/passenger_posts')
def get_passenger_posts():
    passenger_posts = Passenger_Post.query.all()
    return [p.to_dict() for p in passenger_posts]

@app.post('/passenger_posts')
def create_passenger_post():
    try:
        data = request.json
        new_passenger_post = Passenger_Post(offer=data.get("offer"), event=data.get("event"), location=data.get("location"), details=data.get("details"), request=data.get("request"))
        db.session.add(new_passenger_post)
        db.session.commit()
        return new_passenger_post.to_dict(), 201
    except Exception as e:
        print(e)
        return { "errors": ["validation errors"] }, 400
    
    
@app.patch('/passenger_posts/<int:id>')
def patch_passenger_post(id):
    current_passenger_post = db.session.get(Passenger_Post, id)
    if not current_passenger_post:
        return {"error": "Post not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(current_passenger_post, key, data[key])
            db.session.add(current_passenger_post)
            db.session.commit()
            return current_passenger_post.to_dict(), 202
    except Exception as e:
        print(e)
        return {"errors": ["validation errors"]}, 400
    
@app.delete('/passenger_posts/<int:id>')
def delete_passenger_post(id):
    current_passenger_post = db.session.get(Passenger_Post, id) 
    if not current_passenger_post:
        return {"error": "Post not found"}, 404
    db.session.delete(current_passenger_post)
    db.session.commit()
    return {}, 204


if __name__ == '__main__':
    app.run(port=5555, debug=True)