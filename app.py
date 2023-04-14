from sqlalchemy import create_engine
from flask import Flask, render_template, jsonify
from config import username, password, hostname, port, db
import pandas as pd
​
app = Flask(__name__)
​
engine = create_engine(f'postgresql+psycopg2://{username}:{password}@{hostname}:{port}/{db}')
​
@app.route("/api/v1.0/global_inflation")
def ev_data():
    conn = engine.connect()
    query = "SELECT * FROM world_inflation_db"
    df = pd.read_sql(query,conn)
    return df.to_json(orient = 'records')
​
if __name__ == "__main__":
    app.run(debug = True)
Collapse

















