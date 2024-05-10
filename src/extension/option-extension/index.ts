import { Node, ReactNodeViewRenderer } from "@tiptap/react";
import Component from "../../component/extension/option/Component";
import { Editor } from "@tiptap/core/dist/packages/core/src/Editor";

export const Options = Node.create({
  name: "options",
  content: "inline*",
  group: "block",
  selectable: true,

  addAttributes() {
    return {
      id: {
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
        const mcqNode = findMcqNode(this.editor);
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
            attrs: { id: mcqNode.attrs.id },
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
        const mcqNode = findMcqNode(this.editor);
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

/**
 *
 * @param editor
 * @returns Node | null
 *
 * @description This function is used to find the MCQ node in the editor
 */

const findMcqNode = (editor: Editor) => {
  const {
    state: {
      selection: { $from },
    },
  } = editor;

  let depth = $from.depth;
  let mcqNode = null;
  while (depth > 0 && !mcqNode) {
    const node = $from.node(depth);
    if (node.type.name === "mcq") {
      mcqNode = node;
      break;
    }
    depth--;
  }
  return mcqNode;
};

export default Options;
