"use client";
import Button from "./components/UI/Button/Button";
import InputGroup from "./components/Shared/forms/InputGroup";
import { useEffect, useState } from "react";

const init = {
  name: "",
  bio: "",
  email: "",
};

const onFocusError = {
  name: false,
  bio: false,
  email: false,
};

export default function Home() {
  const [values, setValues] = useState<any>({ ...init });
  const [errors, setErrors] = useState<any>({ ...init });
  const [hasError, setHasError] = useState({ ...onFocusError });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const localError = { ...init };

    if (!values.name) {
      localError.name = "name is required";
    }

    if (!values.bio) {
      localError.bio = "Bio is required";
    }
    if (!values.email) {
      localError.email = "Email is required";
    }

    setErrors(localError);
    if (!localError.name && !localError.email && !localError.bio) {
      //  console.loglog("values", values);
    }
  };

  const handleChange = (e: any) => {
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }

    if (e.target.value) {
      setHasError((prev) => ({ ...prev, [e.target.name]: false }));
    }

    if (!e.target.value) {
      setHasError((prev) => ({ ...prev, [e.target.name]: true }));
    }

    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: any) => {
    if (!e.target.value) {
      setErrors({
        ...errors,
        [e.target.name]:
          `${e.target.name[0].toUpperCase() + e.target.name.slice(1)} is required`,
      });
    }
  };

  const handleOnFocus = (e: any) => {
    if (!values[e.target.name]) {
      setHasError((prev) => ({ ...prev, [e.target.name]: true }));
    }
    if (e.target.value) {
      setHasError((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };

  useEffect(() => {
    //  console.loglog("has", hasError);
  }, [hasError]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <form onSubmit={handleSubmit}>
        <InputGroup
          label="Enter your name"
          name="name"
          placeholder="type your name"
          value={values.name}
          errorMessage={errors.name}
          onChange={handleChange}
          onBlue={handleBlur}
          handleOnFocus={handleOnFocus}
          hasError={hasError.name}
        />{" "}
        <InputGroup
          label="Type your email"
          name="email"
          placeholder="type your email"
          value={values.email}
          errorMessage={errors.email}
          onChange={handleChange}
          onBlue={handleBlur}
          handleOnFocus={handleOnFocus}
          hasError={hasError.email}
        />{" "}
        <InputGroup
          label="Enter your bio"
          name="bio"
          placeholder="type your bio"
          value={values.bio}
          errorMessage={errors.bio}
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
