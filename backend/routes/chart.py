from flask import Blueprint, request, jsonify
import pandas as pd
import yfinance as yf
import pandas as pd


chart_bp = Blueprint("chart", __name__)

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

