from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get('name')
    age = data.get('age')

    # You can add logic to save the data to a database or process it here
    print(f'Name: {name} Age: {age}')

    response = {
        'status': 'success',
        'name': name,
        'age': age
    }
    return jsonify(response), 201

if __name__ == '__main__':
    app.run(debug=True)
    print('Backend started ....')
