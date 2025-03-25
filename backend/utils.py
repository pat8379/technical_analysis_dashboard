from stock_indicators import indicators

def indicator_mapper(quotes_list, value):

    mapper = {
        'sma20': indicators.get_sma(quotes_list, 20),
        'sma50': indicators.get_sma(quotes_list, 50),
        'sma100': indicators.get_sma(quotes_list, 100),
        'bollinger_bands': indicators.get_bollinger_bands(quotes_list),
        'MACD': indicators.get_macd(quotes_list)
    }

    return mapper[value]