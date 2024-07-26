#routes.py should only be utilized for importing routes.
from app import app
import requests
from flask import render_template, request, jsonify


@app.route('/') #route to root port
def homePage():
    return render_template('index.html')


#weather route, get request method.
@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city_name') #use requests to get the city args
    if not city: #if user did not input anything, return a 400 error.
        return jsonify({'error': 'City name is required.'}), 400
    api_key = app.config['OPEN_WEATHER_MAP'] #set the api key.
    units = 'imperial' #set the units.
    url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units={units}' #build url with fstring

    response = requests.get(url)
    data = response.json()

    if response.status_code == 200: #if the response code was a success, return the data, otherwise display an error.
        return jsonify(data)
    else:
        return jsonify({'error': 'Unable to fetch weather'}), response.status_code
