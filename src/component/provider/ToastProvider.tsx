import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface ToastContextType {
  notify: (message: string) => void;
}

export const ToastContext = React.createContext<ToastContextType>({
  notify: () => {},
});

const ToastProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const notify = (message: string) => {
    toast(message);
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      {props.children}
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
