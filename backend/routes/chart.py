from flask import Blueprint, request, jsonify
import pandas as pd
import yfinance as yf
import pandas as pd
import os
from google import genai
from stock_indicators import indicators, Quote
from utils import indicator_mapper
from dotenv import load_dotenv

load_dotenv()

chart_bp = Blueprint("chart", __name__)
client = genai.Client(api_key=os.environ['API_KEY'])

@chart_bp.route('', methods=['POST'])
def post_chart_data():
    req = request.json

    ticker = req.get("ticker", None)
    start_date = req.get("start_date", None)
    end_date = req.get("end_date", None)

    if not start_date:
        start_date = pd.to_datetime("2019-01-01")
    else:
        start_date = pd.to_datetime(start_date[:11])

    if not end_date:
        end_date = pd.to_datetime("now")
    else:
        end_date = pd.to_datetime(end_date[:11])

    data = yf.download(ticker, start=start_date, end=end_date)
    data_list = data.reset_index().to_dict(orient='records')

    final_result = []
    for item in data_list:
        transformed_dict = {key[0].lower(): value for key, value in item.items()}
        transformed_dict['date'] = transformed_dict['date'].isoformat()
        final_result.append(transformed_dict)

    return final_result



@chart_bp.route('/stock-list')
def get_stock_list():
    wikipedia_data = pd.read_html('https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')
    snp_company_list = wikipedia_data[0]
    temp_result = snp_company_list[['Symbol', 'Security']].reset_index().to_dict(orient='records')
    print(temp_result[0])


    result = [{'label': x['Security'], 'value': x['Symbol']} for x in temp_result]
    return result


@chart_bp.route('/stock-indicator', methods=['POST'])
def post_stock_indicator():
    req = request.json

    ticker = req.get("ticker", None)
    start_date = req.get("start_date", None)
    end_date = req.get("end_date", None)
    indicator = req.get("indicator", None)

    if not start_date:
        start_date = pd.to_datetime("2019-01-01")
    else:
        start_date = pd.to_datetime(start_date[:11])

    if not end_date:
        end_date = pd.to_datetime("now")
    else:
        end_date = pd.to_datetime(end_date[:11])

    data = yf.download(ticker, start=start_date, end=end_date)
    data_list = data.reset_index().to_dict(orient='records')

    final_result = []
    for item in data_list:
        transformed_dict = {key[0].lower(): value for key, value in item.items()}
        final_result.append(transformed_dict)
    
    quotes_list = [
        Quote(item['date'], item['open'], item['high'], item['low'], item['close'], item['volume']) for item in final_result
    ]
    # results = indicators.get_sma(quotes_list, 20)
    results = indicator_mapper(quotes_list, indicator)

    indicator_results = [{"date": i.date, "price": i.sma } for i in results]

    prompt = f"{indicator_results} \n based on the simple moving average data above, what can be concluded?"
    try:
        chat = client.chats.create(
            model="gemini-2.0-flash"
        )
        response = chat.send_message(message=prompt)
        return jsonify({"response": response.text, "data": indicator_results})

    except Exception as e:
        return jsonify({"error": str(e)}), 500