import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm((prevForm) => !prevForm);
  };

  return (
    <FormContext.Provider value={{ showForm, toggleShowForm }}>
      {children}
    </FormContext.Provider>
  );
}
