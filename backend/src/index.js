import Koa from 'koa';
import Router from 'koa-router';
import fetch from 'node-fetch';
import cors from 'kcors';

const appId = process.env.APPID || '';
const mapURI = process.env.MAP_ENDPOINT || 'https://api.openweathermap.org/data/2.5';
const targetCity = process.env.TARGET_CITY || 'Helsinki,fi';

const port = process.env.PORT || 9000;
const router = new Router();
const app = new Koa();

app.use(cors());

const fetchWeather = async (requestCity) => {
  const endpoint = `${mapURI}/weather?q=${requestCity ? requestCity : targetCity}&appid=${appId}&units=metric`;
  const response = await fetch(endpoint);

  return response ? response.json() : {};
};

const fetchWeatherByCoordinates = async (lon, lat) => {
  const endpoint = `${mapURI}/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`;
  const response = await fetch(endpoint);

  return response ? response.json() : {};
};

const fetchForecastByCoordinates = async (lon, lat) => {
  const endpoint = `${mapURI}/forecast?lat=${lat}&lon=${lon}&appid=${appId}&units=metric=&exclude=minutely`;
  const response = await fetch(endpoint);

  return response ? response.json() : {};
};

const fetchForecast = async (requestCity) => {
  const endpoint = `${mapURI}/forecast?q=${requestCity ? requestCity : targetCity}&appid=${appId}&units=metric&exclude=minutely`;
  const response = await fetch(endpoint);

  return response ? response.json() : {};
};

router.get('/api/weatherbycity', async ctx => {
  const { city } = ctx.request.query;
  const weatherData = await fetchWeather(city);
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.weather ? weatherData : {};
});

router.get('/api/weatherbycoordinates', async ctx => {
  if (ctx.request.query.lon && ctx.request.query.lat) {    
    const { lon, lat } = ctx.request.query;
    const weatherData = await fetchWeatherByCoordinates(lon, lat);
    ctx.type = 'application/json; charset=utf-8';
    ctx.body = weatherData ? weatherData : {};
  }
});

router.get('/api/forecastbycoordinates', async ctx => {
  if (ctx.request.query.lon && ctx.request.query.lat) {
    const { lon, lat, } = ctx.request.query;
    const weatherData = await fetchForecastByCoordinates(lon, lat);
    ctx.type = 'application/json; charset=utf-8';
    ctx.body = weatherData ? weatherData : {};
  }
});

router.get('/api/forecast', async ctx => {
  const { city } = ctx.request.query;
  const weatherData = await fetchForecast(city);
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData ? weatherData : {};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
