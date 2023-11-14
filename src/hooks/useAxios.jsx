import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url, defaultData=null) => {
  const [data, setData] = useState(defaultData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(url)
        setData(response.data);
      } catch (err) {
      setError(err || "ERROR : useAxios")
      } finally {
        setIsLoading(false)
        data && setError(null)
      }
    };

    fetchData();

  },[url]) //TODO

  return { data, isLoading, error }
}

export default useAxios;