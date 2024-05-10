import React from "react";
import "./App.css";
import Tiptap from "./component/Tiptap";
import LoadingProvider from "./component/provider/LoadingProvider";
import UserProvider from "./component/provider/UserProvider";

function App() {
  return (
    <div className="px-2">
      <LoadingProvider>
        <UserProvider>
          <Tiptap />
        </UserProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
