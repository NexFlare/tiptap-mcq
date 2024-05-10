import { Node, NodeViewRenderer, Content } from "@tiptap/core";
import { ReactNodeViewRenderer, mergeAttributes } from "@tiptap/react";
import Component from "../../component/extension/mcq/Component";
import { MCQResponse } from "../../types/mcq.types";
import { transformMcqResponse } from "../../util/transform/mcq";
import { getGeneratedQuestion } from "../../api/mcq";
import { generateId } from "../../util";

interface McqOptions {
  onLoading: () => void;
  onSuccess: () => void;
  onError: () => void;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    customExtension: {
      setMcq: (props?: Array<MCQResponse>) => ReturnType;
    };
  }
}

export const Mcq = Node.create<McqOptions>({
  name: "mcq",
  content: "question options{2,4}",
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

  addOptions() {
    return {
      onLoading: () => {},
      onSuccess: () => {},
      onError: () => {},
    };
  },

  addAttributes() {
    return {
      id: {
        default: null as string | null,
      },
      mcqId: {
        default: null as string | null,
      },
    };
  },

  addCommands() {
    return {
      setMcq:
        (props?: Array<MCQResponse>) =>
        ({ commands }) => {
          if (props) {
            const content = transformMcqResponse(props);
            return commands.insertContent(content);
          } else {
            return commands.insertContent(getDefautMcq());
          }
        },
    };
  },

  addNodeView(): NodeViewRenderer {
    return ReactNodeViewRenderer(Component);
  },
  addKeyboardShortcuts() {
    return {
      /**
       *
       * @returns {boolean}
       *
       * @description This function is used to generate a question from the selected prompt
       */
      "Mod-/": () => {
        const { state } = this.editor;
        const { selection } = state;
        const { from, to } = selection;

        if (!selection.empty) {
          const selectedText = state.doc.textBetween(from, to, " ");
          this.options.onLoading();
          getGeneratedQuestion(selectedText)
            .then((data) => {
              if (data.error || !data.response) {
                this.options.onError();
                return;
              }
              this.options.onSuccess();
              this.editor.commands.setMcq([data.response]);
            })
            .catch((error) => {
              this.options.onError();
              console.error("Error while fetching generated question", error);
            });
        } else {
          console.debug("No text is selected.");
        }

        return true;
      },
    };
  },
});

const getDefautMcq = (): Content => {
  const id = generateId();
  return [
    {
      type: "mcq",
      attrs: { id },
      content: [
        {
          type: "question",
          content: [{ type: "text", text: "This a editable question field" }],
        },
        {
          type: "options",
          content: [{ type: "text", text: "Option 1" }],
          attrs: { name: id },
        },
        {
          type: "options",
          content: [{ type: "text", text: "Option 2" }],
          attrs: { name: id },
        },
      ],
    },
  ];
};
