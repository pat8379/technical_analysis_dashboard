export const base_url = import.meta.env.VITE_BACKEND_URL;
export const indicatorList = [
    {label: '20-Day Simple Moving Average', value: 'sma20'},
    {label: '50-Day Simple Moving Average', value: 'sma50'},
    {label: '100-Day Simple Moving Average', value: 'sma100'},
    {label: 'Bollinger Bands', value: 'bollinger_bands'},
    {label: 'MACD', value: 'MACD'},
    { label: "RSI", value: "rsi" },
    // { label: "Stochastic RSI", value: "stoch_rsi" },
    { label: "Accumulation Distribution", value: "accumulation_distribution" },
    { label: "Average Directional Movement", value: "average_directional_movement" },
    { label: "Average True Range", value: "average_true_range" },
    { label: "Commodity Channel", value: "commodity_channel" },
    { label: "Chaikin Oscillator", value: "chaikin_oscillator" },
    { label: "Percentage Volume Oscillator", value: "percentage_volume_oscillator" },
    { label: "Williams %R", value: "williams_%R" }
]