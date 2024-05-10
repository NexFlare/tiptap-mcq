import { Node, ReactNodeViewRenderer } from "@tiptap/react";
import Component from "../../component/extension/option/Component";
import { findMcqNode } from "../util";

export const Options = Node.create({
  name: "options",
  content: "inline*",
  group: "block",
  selectable: true,

  addAttributes() {
    return {
      name: {
        default: null,
      },
      checked: {
        default: false,
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: "options",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["options", HTMLAttributes, 0];
  },
  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
  addKeyboardShortcuts() {
    return {
      /**
       *
       * @returns {boolean}
       *
       * @description This function is necssary to assign a correct name to the radio button to ensure only one option is selected
       */
      Enter: () => {
        if (!this.editor.isEditable) return false;
        const { mcqNode } = findMcqNode(this.editor);
        const {
          state: {
            selection: { $from },
          },
        } = this.editor;
        if (mcqNode) {
          if (mcqNode.childCount > 4) {
            return this.editor.commands.insertContentAt($from.end(), {
              type: "paragraph",
            });
          }
          // If an mcq node is found, use its ID as the parentId
          return this.editor.commands.insertContentAt($from.end(), {
            type: "options",
            attrs: { name: mcqNode.attrs.id },
            content: [{ type: "text", text: "New Option" }],
          });
        }
        return false;
      },
      /**
       *
       * @returns {boolean}
       * @description This function is used to exit the MCQ node when the user presses Mod-Enter
       */

      "Mod-Enter": () => {
        const { mcqNode } = findMcqNode(this.editor);
        const {
          state: {
            selection: { $from },
          },
        } = this.editor;
        if (mcqNode) {
          return this.editor.commands.insertContentAt($from.end(), {
            type: "paragraph",
          });
        }
        return false;
      },
    };
  },
});

export default Options;
