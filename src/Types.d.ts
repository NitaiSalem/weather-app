export enum DegreeScale {
    Celsius = "C",
    Farenheite = "F",
  }
  
  export enum Compass {
    N = "N",
    NE = "NE",
    E = "E",
    SE = "SE",
    S = "S",
    SW = "SW",
    W = "W",
    NW = "NW",
    NNE = "NNE",
    ENE = "ENE",
    ESE = "ESE",
    SSE = "SSE",
    SSW = "SSW",
    WSW = "WSW",
    WNW = "WNW",
    NNW = "NNW",
  }
  
  export interface IWeather {
    city: string;
    icon: string;
    conditionText: string;
    tempC: number;
    tempF: number;
    date: string;
    wind: number;
    visibility: number;
    airPressure: number;
    humidity: number;
    forecast: ContextForecastDay[];
    windDirection: Compass;
  }

  export interface Location {
    latitude: number;
    longitude: number;
  }