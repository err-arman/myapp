"use client";
import Button from "./components/UI/Button/Button";
import InputGroup from "./components/Shared/forms/InputGroup";
import { useEffect, useState } from "react";
import { deepClone } from "@/app/utils/objectUtils.js";

const init = {
  name: {
    value: "",
    error: "",
    focus: false,
  },
  bio: {
    value: "",
    error: "",
    focus: false,
  },
  skills: {
    value: "",
    error: "",
    focus: false,
  },
};

const onFocusError = {
  name: false,
  bio: false,
  email: false,
};

const transformObj = (obj: any) => {
  const result = Object.keys(obj).reduce((acc: any, curr: any) => {
    acc[curr] = obj[curr].value;
    return acc;
  }, {});

  return result;
};

const checkValidity = (values: any) => {
  const errors: any = {};
  const { name, bio, skills } = values;

  if (!name) {
    errors.name = "Invalid name";
  }
  if (!bio) {
    errors.bio = "Invalid bio";
  }
  if (!skills) {
    errors.skills = "Invalid skiils";
  }

  return {
    errors,
    isValid: Object.keys(errors)?.length ? false : true,
  };
};

export default function Home() {
  const [values, setValues] = useState<any>({ ...init });
  const [hasError, setHasError] = useState({ ...onFocusError });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const x = transformObj(values);
    const { errors, isValid } = checkValidity(x);
    //  console.loglog(isValid);
    if (isValid) {
      //  console.loglog(values);
    } else {
      const oldState = deepClone(values);
      Object.keys(errors).forEach((item) => {
        oldState[item].error = errors[item];
      });

      setValues(oldState);
    }
    // for (const [key, keyValue] of Object.entries(values) as [string, any]) {
    //   if (!keyValue.value) {
    //     setValues((prev: any) => {
    //       return {
    //         ...prev,
    //         [key]: {
    //           ...keyValue,
    //           error: `${key} is required`,
    //         },
    //       };
    //     });
    //   }
    // }
  };

  const handleChange = (e: any) => {
    const { name: key, value } = e.target;
    const oldState = JSON.parse(JSON.stringify(values));
    const { errors } = checkValidity(transformObj(oldState));

    if (errors[key]) {
      oldState[key].error = "";
    }

    oldState[e.target.name].value = e.target.value;
    setValues(oldState);

    // setValues((prev: any) => {
    //   return {
    //     ...prev,
    //     [e.target.name]: {
    //       ...prev[e.target.name],
    //       value: e.target.value,
    //     },
    //   };
    // });
  };

  const handleBlur = (e: any) => {
    const { name: key, value } = e.target;

    const oldState = deepClone(values);
    const { errors } = checkValidity(transformObj(values));

    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setValues(oldState);

    // oldState[key].

    // for (const [key, keyValue] of Object.entries(values) as [string, any]) {
    //   if (key === e.target.name) {
    //     if (!values[key].value) {
    //       setValues((prev: any) => {
    //         return {
    //           ...prev,
    //           [key]: {
    //             ...keyValue,
    //             error: `${key} is required`,
    //           },
    //         };
    //       });
    //     }
    //   }
    // }
  };

  const handleOnFocus = (e: any) => {
    const oldState = deepClone(values);
    oldState[e.target.name].focus = true;
    setValues(oldState);

    // for (const [key, keyValue] of Object.entries(values) as [string, any]) {
    //   if (e.target.name === key) {
    //     setValues((prev: any) => {
    //       return {
    //         ...prev,
    //         [key]: {
    //           ...keyValue,
    //           focus: true,
    //         },
    //       };
    //     });
    //   }
    // }
  };

  useEffect(() => {
    for (const [key, keyValue] of Object.entries(values) as [string, any]) {
      if (keyValue.focus && !keyValue.value) {
        setHasError((prev: any) => {
          return {
            ...prev,
            [key]: true,
          };
        });
      } else {
        setHasError((prev: any) => {
          return {
            ...prev,
            [key]: false,
          };
        });
      }
    }
  }, [values]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <form onSubmit={handleSubmit}>
        <InputGroup
          label="Enter your name"
          name="name"
          placeholder="type your name"
          value={values.name.value}
          errorMessage={values.name.error}
          onChange={handleChange}
          onBlue={handleBlur}
          handleOnFocus={handleOnFocus}
          hasError={hasError.name}
        />{" "}
        <InputGroup
          label="Type your skills"
          name="skills"
          placeholder="type your skills"
          value={values.skills.value}
          errorMessage={values.skills.error}
          onChange={handleChange}
          onBlue={handleBlur}
          handleOnFocus={handleOnFocus}
          hasError={hasError.email}
        />{" "}
        <InputGroup
          label="Enter your bio"
          name="bio"
          placeholder="type your bio"
          value={values.bio.value}
          errorMessage={values.bio.error}
          onChange={handleChange}
          onBlue={handleBlur}
          handleOnFocus={handleOnFocus}
          hasError={hasError.bio}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
