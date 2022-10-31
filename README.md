# Weather app - Frontend + Backend application.

A modern-designed user-friendly potentially real weather application by me, Vladislav Cherkasheninov made in October 2022. 
This app was created as a part of entry process to one of the tech companies, **[Eficode](https://www.eficode.com/)**. The actual task was to work with frontend part of the app and containerise it with Docker. Backend was already premade by **Eficode**, but I had to modify couple of endpoints, as the data structure has changed since backend was created. The changes can be seen on `backend` branch when exploring **_Git folder_**. The whole process of the app creation can be seen on `frontend` branch.

## Tech stack

1. **React** (functional component) has been chosen as a framework for creating the app for its vast amount of libraries and code-frendlinnes.
2. **TypeScript**has been chosen as a coding language to suppport React framework rather than JavaScript due to type checks and enums to fix errors in development and have no errors during production.
3. **Material UI** is straping the styling in this React App. Agiliness and responsiveness of MUI is a huge benifit in this kind of applications. 
4. Usage of **`react-device-detect`** and **Material UI** styling properties made it possible to have a responsive design. Currently the app can be opened on modern smartphones and desktop applications.
5. The app is available in **Docker** container for both [frontend](./frontend/) and [backend](./backend/) parts. `docker-compose.yml` in common folder and `Dokerfile`s in each of the folder features the structure of the container tasks. With help of `nodemon` backend has hotreload feature. Frontend hotreload is featured by default.
6. **Redux Toolkit** is used as state managment in the app. 
7. **Redux Saga** has successfully showed itself as a Redux middleware, and is now used in the app to fetch the data from the api as well.
8. With help of **Redux Persist** this app can manage to keep the Redux state across the pages and refreshes. 
9. **React Router** has been chosen to swap between the pages of the app.

## Features
1. Showing weather data on current location. Browser geolocation should be enabled on prompt.
    - in case of mobile app, whether you test it locally on simulator with http://localhost or with real mobile device with http://<YOUR_IP>, the Geolocation won't be fetched as http protocol is considered insecure. The default city is used to fetch the data.
2. Showing weather data on requested location. Request can be done from _"Find location"_ page. Search line helps with fetching the requested city weather.
3. Setting the list of favourite locations, which are available on the droplist of _"Find location"_ page Search line. Star in right top corner also shows if the city is in favourites. Try pressing it to set it as favourite or remove from favourites.
4. Recent search requests are shown also in _"Find location"_ page Search line. 5 latest unique ones are saved.
5. Weather app pages show both current weather and also forecast for next several hours (24 on desktop and 15 on mobile).
6. Current weather available to observe: 
    - temperature
    - sunset and sunrise,
    - weather description and corresponding icon
    - wind speed and direction
7. Forecast to observe per hour: 
    - corresponding descriptive icon
    - temperature
    - wind speed, direction
    - humidity
    - pressure

## Run the app

There are some options to run the application.

* Either with Docker: 
- either run in the terminal `docker-compose up -d`
    - Backend is now running in http://localhost:9000
    - And demo frontend in http://localhost:3000
- or you can create containers and run them separately for backend and frontend:
    - backend: run in the terminal `docker build -t wheatherapp_backend . && docker run --name wheatherapp_backend_c -p 9000:9000 -e APPID='<YOUR_API_KEY>' -e MAP_ENDPOINT='https://api.openweathermap.org/data/2.5' -d -i --rm -v /YOUR/ABSOLUTE/PATH/TO/THE_APP/backend:/backend -v /backend/node_modules wheatherapp_backend`.
    - frontend: run in the terminal `docker build -t wheatherapp_frontend . && docker run --name wheatherapp_frontend_c -p 9000:9000 -e APPID='<YOUR_API_KEY>' -e MAP_ENDPOINT='https://api.openweathermap.org/data/2.5' -d -i --rm -v /YOUR/ABSOLUTE/PATH/TO/THE_APP/frontend:/frontend -v /frontend/node_modules wheatherapp_frontend`.

* Or locally with desktop:
- go to [backend](./backend/) folder with `cd backend`, and run `nodemon src/index.js` to see life changes or `npm start` to launch classic.
- go to [frontend](./frontend/) folder with `cd .. && cd frontend` (if you are coming back from backend folder) and run `yarn start`.
    - Backend is now running in http://localhost:9000
    - And demo frontend in http://localhost:3000

* Or locally with your phone:
- make sure to set your environmental variable **ENDPOINT** to http://<YOUR_IP>:3000 instead of http://localhost:3000 in order to run the backend and be able to fetch the data from it.    
- go to [backend](./backend/) folder with `cd backend`, and run `npm start`.
- go to [frontend](./frontend/) folder with `cd .. && cd frontend` (if you are coming back from frontend folder) and run `yarn start`.
    - Backend is now running in http://<YOUR_IP>:9000
    - And demo frontend in http://<YOUR_IP>:3000

## Debug the app

Some options to debug the app:

* Redux devtools extention in the browser
* React devtools extention in the browser
* JavaScript console

To debug mobile devices you could check [this resource](https://sumn2u.medium.com/debugging-react-applications-in-mobile-devices-39b584ff3eea)


### Screenshots

#### Desktop
![Current location](./frontend/screenshots/Screenshot%202022-10-30%20at%2018.12.59.png)
![Find location](./frontend/screenshots/Screenshot%202022-10-30%20at%2018.13.33.png)

#### Mobile

![Current location](./frontend/screenshots/IMAGE%202022-10-30%2018%3A26%3A36.jpg)
![Find location](./frontend/screenshots/IMAGE%202022-10-30%2018%3A26%3A34.jpg)
