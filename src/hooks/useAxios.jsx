import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url, defaultData=null) => {
  const [data, setData] = useState(defaultData)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
          const response = await axios.get(url)
          // console.log('resp', response);
          setData(response.data);

      } catch (err) {
        // console.log('err.response', err.response);
        // console.log('err.response.data', err.response.data);
        // console.log('err.response.status', err.response.status);
        // console.log('err.response.headers', err.response.headers);
        setError(err)

      } finally {
        setIsLoading(false)
        // data && setError(null) //TODO bonne pratique?
      }
    };

    fetchData();

  },[url]) //TODO si finally data && setError(null)

  return { data, isLoading, error }
}

export default useAxios;