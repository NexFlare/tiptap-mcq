import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useContext } from "react";
import { Mcq } from "../extension/mcq-extension";
import Question from "../extension/question-extension";
import Options from "../extension/option-extension";
import Header from "./Header";
import { LoadingContext } from "./provider/LoadingProvider";
import { baseContent, message } from "../constant";
import { ToastContext } from "./provider/ToastProvider";

export default function Tiptap() {
  const { setLoading } = useContext(LoadingContext);
  const { notify } = useContext(ToastContext);
  const extensions = [
    StarterKit,
    Mcq.configure({
      onLoading: () => setLoading(true),
      onSuccess() {
        setLoading(false);
      },
      onError() {
        setLoading(false);
        notify(message.QUESTION_ERROR);
      },
    }),
    Question,
    Options,
  ];
  const content = baseContent;
  return (
    <EditorProvider
      slotBefore={<Header />}
      extensions={extensions}
      content={content}
      children={null}
    ></EditorProvider>
  );
}
