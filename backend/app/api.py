from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import *
import os
from dotenv import load_dotenv
load_dotenv()
import requests
import json
import os

app = FastAPI()

API_KEY = os.getenv("WEATHER_API_KEY")

origins = [
    "http://localhost:3000",
    "localhost:3000"
]
today = str(date.today())
hour = datetime.now().hour


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
def ApiFetch():
    data = requests.get(f"http://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q=New York&days=5&aqi=no&alerts=no")
    return(data.json())


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your Weather App."}


@app.get("/api/location")
async def getLocation():
    data = ApiFetch()
    return data["location"]

@app.get("/api/getcurrentWeather")
async def getcurrentWeather():
    data = ApiFetch()
    forecastDate = data["forecast"]["forecastday"]
    for i in forecastDate:
        if i["date"] == today:
            return (i["hour"][hour])

@app.get("/api/dayWeather/")
async def getForecast(days: int = 1):
    data = ApiFetch()
    wData = []
    ranges = data["forecast"]["forecastday"][0:days]
    for day in ranges:
        wData.append({"date": day["date"], "data": day["day"]})
    return wData

@app.get("/api/getHour")
async def getHour():
    data = ApiFetch()
    forecastDate = data["forecast"]["forecastday"]
    for i in forecastDate:
        if i["date"] == today:
            return i["hour"]
    else: 
        return {"error: Date Not Found", "Code:404"}
