import { icons } from "./../constants";

interface iWeatherResults {
  location: {
    name: string;
    region?: string;
  };
  weather: {
    condition: {
      icon: string;
      text: string;
    };
    feelslike_c: string;
  };
}

export default function WeatherResults({ location, weather }: iWeatherResults) {
  return (
    <div className="text-center flex flex-col gap-6 mt-10">
      <p className="text-xl font-semibold">
        {location.name}, {location.region}
      </p>
      <img
        src={weather.condition.icon}
        alt="Weather Icon"
        className="w-52 mx-auto"
      />

      <h3 className="text-2xl font-bold text-zinc-800">
        {weather.condition.text}
      </h3>
      <div className="flex justify-center">
        <img src={icons.temperature} alt="Temperature" className="h-9 mt-1" />
        <h2 className="text-4xl font-extrabold">
          {weather.feelslike_c}&#176;C
        </h2>
      </div>
    </div>
  );
}
