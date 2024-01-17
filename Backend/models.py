from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)


class Transporter(db.Model, SerializerMixin):
    __tablename__ = 'transporters_table'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    age = db.Column(db.Integer, nullabe = False)
    #type of vehicle
    vehicle = db.Column(db.String, nullable = False)
    #number of spots available for passengers
    seats = db.Column(db.Integer)




class Post(db.Model, SerializerMixin):
    __tablename__ = 'posts_table'

    id = db.Column(db.Integer, primary_key = True)
    #this is the type of event
    event = db.Column(db.Integer, nullable = False)
    #this is where the person is located
    location = db.Column(db.String, nullable = False)
    #this is to share general info 
    details = db.Column(db.String)
    #this is for special requests (ie: compensation, requirements to drive/ride, etc.)
    request = db.Column(db.String)



class Passenger(db.Model, SerializerMixin):
    __tablename__ = 'passengers_table'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    age = db.Column(db.Integer, nullabe = False)
