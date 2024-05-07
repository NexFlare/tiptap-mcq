import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";

export const Component = () => {
  return (
    <NodeViewWrapper className="question-wrapper">
      <div className="pl-2 font-mono">
        <NodeViewContent
          className="text-slate-950 text-sm question-content"
          contentEditable={true}
        />
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
