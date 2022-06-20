# Exercise - Weather App (kloeckner.i)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APP_OPENWEATHER_BASEURL` - The base URL for the OpenWeather API (<https://api.openweathermap.org/data/2.5/weather>)

`VITE_APP_OPENWEATHER_APIKEY` - The API key for the OpenWeather API. You can get one at <https://openweathermap.org/api>

### Install Dependences

To set up the project, run the following command on the root folder after cloning the repository to install the dependencies

```bash
npm install
```

### Start the Vite server

After installing the neccesary dependencies, run the following command on the terminal to run the dev server on port `3000` (default port)

```bash
npm run dev
```

## Running Test

To run tests, run the following command on the terminal

```bash
  npm run test:unit
```

## Support

For support, email ejiroasiuwhu@gmail.com.

## Roadmap

- End to end tests for the weather app with Cypress

- Fetch, and cache the weather data from the OpenWeather API using [Vue Query](https://github.com/DamianOsipiuk/vue-query)

- Mobile Responsive Design

# Welcome to the interview task :)

If something is not clear or you need help - just ask :). Nobody knows everything!

1. Read the task
2. Create a project
3. Please implement the project according to your own best standards,
   - Tests, tdd
   - Code guidelines
   - Structure / architecture
   - Refactoring
   - Conventions
4. For the layout bootstrap or plain design is enough
5. Make sure to commit frequently
6. Provide an overview which points you would improve if you had more time to work on the project
7. Write code that is suitable for production

N.B.: Please do not make the repo publicly accessible. Send an archive of your repo to us instead, preferable through codesubmit.

## Scenario - Weathermap api client

Your app should be a client for the [Open Weather Map API](http://openweathermap.org/API#weather) JSON api

Features that should work:

- Display the weather at random geographic coordinates
- A form with city and country that fetches and displays the weather in this city
  - optional: cache the fetched weather data
- Gracefully handle the case where the city could not be found (display the information to the user)

Have fun!
