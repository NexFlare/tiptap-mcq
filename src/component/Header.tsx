import React from "react";
import HeaderButton from "./HeaderButton";
import { useCurrentEditor } from "@tiptap/react";

export default function Header() {
  const editor = useCurrentEditor();
  return (
    <div className="py-2 flex">
      <div className="button-container"></div>
      <HeaderButton
        text="Create Question"
        onClick={() => editor.editor?.chain().setMcq().run()}
      />
    </div>
  );
}
