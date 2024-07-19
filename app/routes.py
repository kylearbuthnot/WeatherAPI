from app import app
from flask import render_template

@app.route('/') #route to root port?
def home():
    return render_template('index.html')