import React from "react";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <div className="py-2 flex">
      <div className="button-container"></div>
      <HeaderButton text="Bold" onClick={() => console.log("Bold")} />
    </div>
  );
}
