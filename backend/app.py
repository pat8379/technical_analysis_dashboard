import os
from flask import Flask
from flask_cors import CORS
from routes.chart import chart_bp
from routes.llm import llm_bp
from routes.llm_gemini import llm_gemini_bp


from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

app.register_blueprint(chart_bp, url_prefix="/chart")
app.register_blueprint(llm_bp, url_prefix="/llm")
app.register_blueprint(llm_gemini_bp, url_prefix="/llm_gemini")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
