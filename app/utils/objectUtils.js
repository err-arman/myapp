export const isEmpty = (obj) => {
  const result = Object.keys(obj).length === 0;
};

export const deepClone = (state) => {
  return JSON.parse(JSON.stringify(state));
};

export const formateObj = (obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = {
      value: obj[curr],
      error: "",
      focused: false,
      touched: false,
    };

    return acc;
  }, {});
};

export const mapStateToKey = (state, key) => {
  const oldState = deepClone(state);
  return Object.keys(oldState).reduce((acc, curr) => {
    acc[curr] = {
      value: oldState[curr][key],
    };
    return acc;
  }, {});
};

export const checkValidity = (obj) => {
  return Object.keys(obj)?.reduce((acc, curr) => {
    if (!obj[curr]) {
      return (acc[key] = `${curr} is required`);
    }
    return acc;
  }, {});
};
