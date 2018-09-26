import os, math, requests, random
from flask import Flask, jsonify, request, abort

app = Flask(__name__)

version = os.getenv('SERVICE_VERSION','v1')
instance = os.getenv('HOSTNAME','default_instance')

@app.route('/')
def index(): 

    # do some cpu intensive computation
    # x = 0.0001
    #for i in range(0, 1000000):
	    #x = x + math.sqrt(x)
    
    if request.headers.get('fail'):
        if random.random() < float(request.headers.get('fail')):
            abort(500,'Fail Triggered')

    return jsonify(version=version,instance=instance)


@app.route('/time')
def time():
    return jsonify(
        version=version,
        instance=instance,
        time=requests.get('http://time.jsontest.com/').json())


@app.errorhandler(500)
def custom500(error):
    response = jsonify({'message': error.description})
    response.status_code = 500
    return response

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',threaded=True)