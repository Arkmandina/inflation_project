from sqlalchemy import create_engine
from flask import Flask, render_template, jsonify
from config import username, password, hostname, port, db
import pandas as pd

from flask_cors import CORS





app = Flask(__name__)
CORS(app)

engine = create_engine(f'postgresql+psycopg2://{username}:{password}@{hostname}:{port}/{db}')

@app.route("/api/v1.0/global_inflation")
def inflation_data():
    conn = engine.connect()
    query = "SELECT * FROM inflation_db"
    df = pd.read_sql(query,conn)
    return df.to_json(orient = 'records')


@app.route("/api/v1.0/location")
def inflation_location():
    conn = engine.connect()
    query = "SELECT * FROM location_db"
    df = pd.read_sql(query,conn)
    return df.to_json(orient = 'records')


@app.route("/api/v1.0/location_code")
def location_code():
    conn = engine.connect()
    query = "SELECT * FROM location_code"
    df = pd.read_sql(query,conn)
    return df.to_json(orient = 'records')

if __name__ == "__main__":
    app.run(debug = True)