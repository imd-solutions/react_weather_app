import { useEffect, useState } from "react";
import { icons } from "./../../constants";
import useFetch from "./../../hooks/useFetch";
import InputText from "./../../components/input/InputText";
import WeatherResults from "./../../components/WeatherResults";
import MessageHelper from "./../../components/MessageHelper";
import EventButton from "./../../components/event/EventButton";
import ProcessingCircular from "./../../components/processing/ProcessingCircular";
import SiteHeader from "../../components/partials/SiteHeader";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState("London");

  const { data, isLoading, error, refetch } = useFetch("forecast.json", {
    q: city,
    days: "3",
  });

  useEffect(() => {
    refetch();
  }, [city]);
  return (
    <>
      <SiteHeader />
      <div className="h-screen grid place-items-center ">
        <div className="bg-white w-96 p-4 rounded-md block max-w-sm p-6 bg-white border-gray-200 rounded-lg sm:border sm:shadow">
          <div className="flex items-center justify-between">
            <InputText
              inputId="locationSearch"
              name="inputSearch"
              placeholder="Enter Your Location"
              css="text-xl border-b p-1 border-gray-200 font-semibold flex-1"
              handleOnChange={(val: string) => setInputValue(val)}
            />
            <EventButton
              btnImage={{
                icon: icons.search,
                altText: "Search Icon",
                imgCss: "w-8",
              }}
              handleOnClick={() => setCity(inputValue)}
            />
          </div>
          <div className={`duration-300 delay-75  overflow-hidden h-[30rem]`}>
            {isLoading ? (
              <ProcessingCircular
                colour="blue"
                text="Please hold on. Getting information..."
              />
            ) : error ? (
              <MessageHelper message="Something has gone wrong" type="error" />
            ) : data === null ? (
              <MessageHelper message="No data available" type="warning" />
            ) : data ? (
              <WeatherResults
                location={data?.location}
                weather={data?.current}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
