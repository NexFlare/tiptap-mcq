import { Node, ReactNodeViewRenderer, mergeAttributes } from "@tiptap/react";
import Component from "./Component";

export const Question = Node.create({
  name: "question",
  content: "inline*",
  group: "block",
  selectable: true,
  parseHTML() {
    return [
      {
        tag: "question",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["question", mergeAttributes(HTMLAttributes), 0];
  },
  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});

export default Question;
