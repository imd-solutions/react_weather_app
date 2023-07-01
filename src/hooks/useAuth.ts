import { useState, useEffect } from "react";
import { userLogIn } from "../utils/AxiosService";

const useAuth = (payload: any) => {
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await userLogIn(payload);
      console.log("Resp", response);
      setUser(response.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return { user, isLoading, error };
};

export default useAuth;
