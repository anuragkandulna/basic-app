from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)  # This will enable CORS for all routes
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get('name')
    age = data.get('age')

    print(f'Name: {name} Age: {age}')

    # Example: process the data or save it to a database
    response = {
        'status': 'success',
        'name': name,
        'age': age
    }
    return jsonify(response), 201

if __name__ == '__main__':
    app.run(debug=True)
    print('Backend started ....')
