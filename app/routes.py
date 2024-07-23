#routes.py should only be utilized for importing routes.
from app import app
from flask import render_template

@app.route('/') #route to root port?
def homePage():
    return render_template('index.html')