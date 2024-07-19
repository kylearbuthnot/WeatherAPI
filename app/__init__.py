from flask import Flask

app = Flask(__name__) #ask on __name__ again, gets modules name?

from app import routes