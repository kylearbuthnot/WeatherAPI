import os


class Config:
    WEATHER_API_KEY = os.getenv('OPEN_WEATHER_MAP')
hi