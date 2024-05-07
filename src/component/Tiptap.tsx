import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { Mcq } from "./extension/mcq";
import Question from "./extension/question";
import Options from "./extension/option";
import Header from "./Header";
import UserProvider from "./UserProvider";

export default function Tiptap() {
  const extensions = [StarterKit, Mcq, Question, Options];
  const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
`;
  return (
    <UserProvider>
      <EditorProvider
        slotBefore={<Header />}
        extensions={extensions}
        content={content}
        children={null}
      ></EditorProvider>
    </UserProvider>
  );
}
