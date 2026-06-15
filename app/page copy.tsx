"use client";
import Button from "./components/UI/Button/Button";
import InputGroup from "./components/Shared/forms/InputGroup";
import { useEffect, useState } from "react";

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
  email: {
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

export default function Home() {
  const [values, setValues] = useState<any>({ ...init });
  const [hasError, setHasError] = useState({ ...onFocusError });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    for (const [key, keyValue] of Object.entries(values) as [string, any]) {
      if (!keyValue.value) {
        setValues((prev: any) => {
          return {
            ...prev,
            [key]: {
              ...keyValue,
              error: `${key} is required`,
            },
          };
        });
      }
    }

    //  console.loglog("values", values);
  };

  const handleChange = (e: any) => {
    setValues((prev: any) => {
      return {
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          value: e.target.value,
        },
      };
    });
  };

  const handleBlur = (e: any) => {
    for (const [key, keyValue] of Object.entries(values) as [string, any]) {
      if (key === e.target.name) {
        if (!values[key].value) {
          setValues((prev: any) => {
            return {
              ...prev,
              [key]: {
                ...keyValue,
                error: `${key} is required`,
              },
            };
          });
        }
      }
    }
  };

  const handleOnFocus = (e: any) => {
    for (const [key, keyValue] of Object.entries(values) as [string, any]) {
      if (e.target.name === key) {
        setValues((prev: any) => {
          return {
            ...prev,
            [key]: {
              ...keyValue,
              focus: true,
            },
          };
        });
      }
    }
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
          label="Type your email"
          name="email"
          placeholder="type your email"
          value={values.email.value}
          errorMessage={values.email.error}
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
