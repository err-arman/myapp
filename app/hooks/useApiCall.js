const { useState, useEffect } = require("react");

const useGetApiCall = (url, cb) => {
  const [loading, setLoading] = useState(false);
  const [handleError, setHandleError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    fetch(url)
      .then((data) => {
        const response = data.json();
        return response;
      })
      .then((daata) => {
        if (cb) {
          setData(cb(daata));
        } else {
          setData(daata);
        }
      })
      .catch((error) => {
        //  console.loglog("error", error);
      })
      .finally(data);
  };

  return {
    loading,
    handleError,
    data,
  };
};

export default useGetApiCall;
