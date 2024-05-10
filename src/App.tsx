import React from "react";
import "./App.css";
import Tiptap from "./component/Tiptap";
import LoadingProvider from "./component/provider/LoadingProvider";
import UserProvider from "./component/provider/UserProvider";
import ToastProvider from "./component/provider/ToastProvider";
// import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="px-2">
      <LoadingProvider>
        <ToastProvider>
          <UserProvider>
            <Tiptap />
          </UserProvider>
        </ToastProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
