#config file, used for flask app configurations.
import os
from dotenv import load_dotenv

#load env variables from the .env file
load_dotenv()

class Config:
    #grabs the api key from the .env file.
    WEATHER_API_KEY = os.getenv('OPEN_WEATHER_MAP')
