import React, { useState } from "react";

export interface LoadingContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = React.createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {},
});

const LoadingProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
