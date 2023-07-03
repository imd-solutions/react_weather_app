import { useEffect, useState } from "react";
import SiteHeader from "../../components/partials/SiteHeader";
import { getLocations } from "../../services/LocationService";
import { icons } from "../../constants";
import EventButton from "../../components/event/EventButton";
import { useNavigate } from "react-router-dom";

export default function Locations() {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();
  const getLocation = () => {
    setIsLoading(true);

    try {
      getLocations().then((resp) => {
        setData(resp.data);
        setIsLoading(false);
      });
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const locationSearch = (location: string) =>
    navigate(`/application?location=${location}`);

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      <SiteHeader />
      <div className="h-screen grid place-items-center ">
        <div className="bg-white w-96 p-4 rounded-md block max-w-sm p-6 bg-white border-gray-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900">
                  Saved Locations
                </h5>
              </div>
              <div>
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {isLoading
                    ? "Loading"
                    : error
                    ? "There was an error"
                    : data && data.length > 0
                    ? data.map((location, i) => (
                        <li className="py-3 sm:py-4" key={i}>
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <img
                                className="w-8 h-8 rounded-full"
                                src={icons.location}
                                alt="Neil image"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {location.title}
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                              <EventButton
                                btnImage={{
                                  icon: icons.search_location,
                                  altText: "Search Location Icon",
                                  imgCss: "w-8",
                                }}
                                handleOnClick={() =>
                                  locationSearch(location.title)
                                }
                              />
                            </div>
                          </div>
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
