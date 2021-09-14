import { useState, useEffect } from "react";
import paginate from "./paginate";
const url = "https://picsum.photos/v2/list?limit=50";
const useFetch = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;
