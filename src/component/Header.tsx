import React, { useCallback, useContext, useEffect } from "react";
import HeaderButton from "./HeaderButton";
import { useCurrentEditor } from "@tiptap/react";
import { UserContext } from "./provider/UserProvider";
import { getAllQuestions } from "../api/mcq";
import { LoadingContext } from "./provider/LoadingProvider";
import { baseContent } from "../constant";

export default function Header() {
  const editorObj = useCurrentEditor();
  const { userType, setUserType } = useContext(UserContext);
  const { loading } = useContext(LoadingContext);

  const getQuestions = useCallback(async () => {
    const response = await getAllQuestions(userType);
    if (response.error == null) {
      editorObj.editor?.chain().setMcq(response.response).run();
    }

    editorObj.editor?.setEditable(userType === "EDITOR");
  }, [userType]);

  useEffect(() => {
    setTimeout(() => {
      editorObj.editor?.commands.setContent(baseContent);
    });

    getQuestions();
  }, [userType]);
  return (
    <div className="fixed w-full z-10 bg-white">
      <div className="py-2 flex mr-4 justify-between items-center">
        <div className="button-container">
          {userType === "EDITOR" && (
            <HeaderButton
              text="Create Question"
              onClick={() => editorObj.editor?.chain().setMcq().run()}
            />
          )}
        </div>
        {loading && (
          <div className="justify-self-center px-2 py-1 bg-blue-200 border-blue-500 rounded-md border-2 border-solid font-bold">
            Loading
          </div>
        )}
        <div className="mr-0">
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
              onChange={() => {}}
            />
            <div
              className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4
             peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 
               peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
             peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
              after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
              after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
            <span className="ms-3 text-sm font-medium text-gray-900">
              Editor Mode
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
