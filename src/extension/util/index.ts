import { Editor } from "@tiptap/core/dist/packages/core/src/Editor";

/**
 *
 * @param editor
 * @returns Node | null
 *
 * @description This function is used to find the MCQ node in the editor
 */

export const findMcqNode = (editor: Editor) => {
  const {
    state: {
      selection: { $from, $anchor },
    },
  } = editor;

  let depth = $from.depth;
  let mcqNode = null;
  let mcqPos = 0;
  while (depth > 0 && !mcqNode) {
    const node = $from.node(depth);
    if (node.type.name === "mcq") {
      mcqNode = node;
      mcqPos = $anchor.before(depth);
      break;
    }
    depth--;
  }
  return { mcqNode, mcqPos };
};
