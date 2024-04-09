from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/api/scraped_data')
def get_scraped_data():
    # Read the scraped data from the JSON file
    with open('tengrinews_data.json', 'r') as f:
        scraped_data = json.load(f)
    
    # Return the scraped data as JSON
    return jsonify(scraped_data)

if __name__ == '__main__':
    app.run(debug=True)
