#init is only used for initilization and importing other componenets required such as routes
from flask import Flask
from config import Config


#App instance
app = Flask(__name__) 

#app configuration
app.config.from_object(Config)

#import routes.
from app import routes

#double checking env var's work.
#print("API Key:", app.config['WEATHER_API_KEY'])