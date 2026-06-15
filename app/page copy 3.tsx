"use client";

const init = {
  name: "arman",
  email: "",
  password: "",
};

import { useForm } from "@/app/hooks/useForm";
import InputGroup from "./components/Shared/forms/InputGroup";
import { useEffect } from "react";

export default function Home() {
  const { formState, handleChange, handleFocus, handleBlur } = useForm(init);

  useEffect(() => {
    //  console.loglog("form state form page.tsx", formState);
  }, [formState]);

  return (
    <div>
      <form>
        <InputGroup
          name="name"
          label="Enter you name"
          // @ts-ignore
          value={formState.name.value}
          onChange={handleChange}
          handleOnFocus={handleFocus}
          onBlue={handleBlur}
        />

        <InputGroup
          name="email"
          label="Enter email name"
          // @ts-ignore
          value={formState.email.value}
          onChange={handleChange}
          handleOnFocus={handleFocus}
          onBlue={handleBlur}
        />
        <InputGroup
          name="password"
          label="Enter you password"
          // @ts-ignore
          value={formState.password.value}
          onChange={handleChange}
          handleOnFocus={handleFocus}
          onBlue={handleBlur}
        />
      </form>
    </div>
  );
}
