import React, { useContext } from "react";
import HeaderButton from "./HeaderButton";
import { useCurrentEditor } from "@tiptap/react";
import { UserContext } from "./UserProvider";

export default function Header() {
  const editor = useCurrentEditor();
  const { userType, setUserType } = useContext(UserContext);
  return (
    <div className="py-2 flex">
      <div className="button-container">
        {userType === "EDITOR" && (
          <HeaderButton
            text="Create Question"
            onClick={() => editor.editor?.chain().setMcq().run()}
          />
        )}
      </div>
      <div className="ml-auto mr-0">
        <div
          className="inline-flex items-center cursor-pointer"
          onClick={(e) =>
            setUserType(userType === "EDITOR" ? "VIEWER" : "EDITOR")
          }
        >
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={userType === "EDITOR"}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Editor Mode
          </span>
        </div>
      </div>
    </div>
  );
}
