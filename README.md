# Weather App ☀️🌧️

## Setup

1. Clone the project:

```bash
git clone https://github.com/seu-usuario/weather-app.git
cd weather-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the project:

```bash
pnpm dev
```

## Features

- Search by city
- Display name, temperature, weather condition and proper icon
- Toggle between °C and °F
- Responsive design
- Friendly error feedback

## Key Decisions

1. **API Choice**: Used OpenWeatherMap as it's reliable and free for small-scale use.
2. **State Management**: No extra management besides React's built-in hooks to keep it minimal and not over-engineer.
3. **Error Handling**: Included specific error messages for different scenarios based on API documentation.
4. **Responsive Design**: Used Tailwind's responsive utilities to ensure the app works well on all devices.
5. **Component Structure**: Decided to create SearchBar, UnitToggle and WeatherCard components to separate logic and being mindfull about component reusability.
6. **Extra**:

- I didn't add the .env file on gitignore so my API_KEY could be used by you to check the code. I'll remove it as soon as I got the feedback.
- I decided to use Vite together with React by no specific reason despite being used to Vite and because its fast setup.
- I did everything in a single commit because of simplicity and quick testing. In other scenario I would have done different commits for each component, hook, and error handling.
