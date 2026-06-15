const { useState } = require("react");

const useCounter = (initialValue = 0, min = 0, max = 15) => {
  const [counter, setCounter] = useState(initialValue);

  const handleInc = () => {
    if (max > counter) {
      setCounter(counter + 1);
    }
  };

  const handleDec = () => {
    if (min < counter) {
      setCounter(counter - 1);
    }
  };

  return {
    counter,
    handleInc,
    handleDec,
  };
};

export default useCounter;
