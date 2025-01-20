from flask import Blueprint, request, jsonify

chart_bp = Blueprint("chart", __name__)

@chart_bp.route('', methods=['POST'])
def post_chart_data():
    req = request.json

    ticker = req.get("ticker", None)
    start_date = req.get("start_date", None)
    end_date = req.get("end_date", None)

    return jsonify({'success': 'ok'})



@chart_bp.route('/stock-list')
def get_stock_list():
    return "hi"

