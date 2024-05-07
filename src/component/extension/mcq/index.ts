import { Node, NodeViewRenderer } from "@tiptap/core";
import { ReactNodeViewRenderer, mergeAttributes } from "@tiptap/react";
import Component from "./Component";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    customExtension: {
      setMcq: () => ReturnType;
    };
  }
}

export const Mcq = Node.create({
  name: "mcq",
  content: "question options*",
  group: "block",

  parseHTML() {
    return [
      {
        tag: "mcq",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["mcq", mergeAttributes(HTMLAttributes), 0];
  },

  addAttributes() {
    return {
      mcqId: {
        default: null as string | null,
      },
    };
  },

  addCommands() {
    return {
      setMcq:
        () =>
        ({ commands }) => {
          const mcqId = Math.random().toString(36).substring(7);
          return commands.insertContent({
            type: "mcq",
            attrs: { mcqId },
            content: [
              {
                type: "question",
                content: [{ type: "text", text: "Question" }],
              },
              {
                type: "options",
                content: [
                  { type: "text", text: "Option", attrs: { id: "123" } },
                ],
                attrs: { id: mcqId },
              },
              {
                type: "options",
                content: [{ type: "text", text: "Option 2" }],
                attrs: { id: mcqId },
              },
            ],
          });
        },
    };
  },

  addNodeView(): NodeViewRenderer {
    return ReactNodeViewRenderer(Component);
  },
});
