import os, math, requests, random
from flask import Flask, jsonify, request, abort
from datetime import datetime

app = Flask(__name__)

@app.route('/time')
def index(): 
    return jsonify(time=datetime.now())

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',threaded=True,port=8000)