import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { Mcq } from "./extension/mcq";
import Question from "./extension/question";
import Options from "./extension/option";

const MenuBar = () => {
  return <div className="flex p2"></div>;
};

export default function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit, Mcq, Question, Options],
    content: `
    <h2>
      Hi there,
    </h2>
    <p>
      this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    `,
  });
  return (
    <>
      <MenuBar />
      <EditorContent editor={editor} />
    </>
  );
}
