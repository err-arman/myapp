"use client";

import { useState } from "react";
import {
  deepClone,
  formateObj,
  mapStateToKey,
  isEmpty,
} from "@/app/utils/objectUtils";
export const useForm = (init, validate) => {
  const [state, setState] = useState(formateObj(init));

  const handleChange = (e) => {
    const { name, value } = e.target;

    const oldState = deepClone(state);
    oldState[name].value = value;

    const values = mapStateToKey(oldState, "value");

    setState(oldState);
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    const oldState = deepClone(state);
    oldState[name].focused = true;

    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }

    setState(oldState);
  };

  const handleBlur = (e) => {
    const oldState = deepClone(state);

    const value = mapStateToKey(state, "value");
    oldState[e.target.name].focused = false;
    setState(oldState);
  };

  const hanldeSubmit = (e, cb) => {
    e.preventDefault();
    if (typeof validate === "boolean") {
      if (validate) {
        cb({
          values: mapStateToKey(state, "value"),
          hasError: false,
          touched: mapStateToKey(state, "touched"),
          focused: mapStateToKey(state, "focused"),
        });
      } else {
        cb(mapStateToKey(state, "error"));
      }
      return;
    }

    if (typeof validate === "function") {
      const values = mapStateToKey(state, "values");
      const { error } = validate(values);
      const hasError = !isEmpty(error);
      if (!hasError) {
        cb({
          values: mapStateToKey(state, "value"),
          hasError: false,
          touched: mapStateToKey(state, "touched"),
          focused: mapStateToKey(state, "focused"),
          hasError,
        });
      } else {
        cb({ error, hasError });
      }
    }
  };

  return {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
  };
};
