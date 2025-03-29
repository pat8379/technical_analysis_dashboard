from stock_indicators import indicators

def indicator_mapper(quotes_list, value):

    mapper = {
        'sma20': indicators.get_sma(quotes_list, 20),
        'sma50': indicators.get_sma(quotes_list, 50),
        'sma100': indicators.get_sma(quotes_list, 100),
        'bollinger_bands': indicators.get_bollinger_bands(quotes_list),
        'MACD': indicators.get_macd(quotes_list),
        'rsi': indicators.get_rsi(quotes_list),
        # 'stoch_rsi': indicators.get_stoch_rsi(quotes_list),
        'accumulation_distribution': indicators.get_adl(quotes_list),
        'average_directional_movement': indicators.get_adx(quotes_list),
        'average_true_range': indicators.get_atr(quotes_list),
        'commodity_channel': indicators.get_cci(quotes_list),
        'chaikin_oscillator': indicators.get_chaikin_osc(quotes_list),
        # 'force_index': indicators.get_force_index(),
        'percentage_volume_oscillator': indicators.get_pvo(quotes_list),
        'williams_%R': indicators.get_williams_r(quotes_list),
        # 'triple_ema_oscillator': indicators.get_trix

    }

    return mapper[value]


def is_number(var):
    return isinstance(var, (int, float, complex)) and not isinstance(var, bool)