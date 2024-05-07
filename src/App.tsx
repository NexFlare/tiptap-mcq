import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tiptap from "./component/Tiptap";
import Header from "./component/Header";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Mcq } from "./component/extension/mcq";
import Question from "./component/extension/question";
import Options from "./component/extension/option";

function App() {
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
    <EditorProvider
      slotBefore={<Header />}
      extensions={extensions}
      content={content}
      children={null}
    ></EditorProvider>
  );
}

export default App;
