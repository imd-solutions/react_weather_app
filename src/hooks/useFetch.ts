import { useState, useEffect } from "react";
import { getRequest } from "./../services/ApiService";

const useFetch = (endpoint: string, query: any) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await getRequest(
        endpoint,
        query,
        "https://weatherapi-com.p.rapidapi.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error: any) {
      if (error.response.data.error.code === 1006) {
        setData(null);
        return;
      }
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
