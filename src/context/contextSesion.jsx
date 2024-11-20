import { createContext } from "react";
import { useState } from "react";

const SesionContext = createContext();

const SesionProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <SesionContext.Provider value={{ user, setUser }}>
      {children}
    </SesionContext.Provider>
  );
};

export { SesionContext, SesionProvider };
