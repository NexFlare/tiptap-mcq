import { Node, ReactNodeViewRenderer } from "@tiptap/react";
import Component from "./Component";

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
      Enter: () => {
        const {
          state: {
            selection: { $from },
          },
        } = this.editor;

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
        if (mcqNode) {
          console.log("Found node");
          // If an mcq node is found, use its ID as the parentId
          return this.editor.commands.insertContentAt($from.end(), {
            type: "options",
            attrs: { id: mcqNode.attrs.mcqId },
            content: [{ type: "text", text: "New Option" }],
          });
        }
        return false;
      },
    };
  },
});

export default Options;
