from app import app
from flask import Flask, jsonify, render_template


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html") #render_template function needed, renders the

if __name__ == "__main__":
    app.run(debug=True)