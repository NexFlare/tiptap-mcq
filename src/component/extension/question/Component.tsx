import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React, { useContext } from "react";
import { UserContext } from "../../UserProvider";

export const Component = () => {
  const { userType } = useContext(UserContext);
  return (
    <NodeViewWrapper className="question-wrapper">
      <div className="pl-2 font-mono">
        <NodeViewContent
          className="text-slate-950 text-sm question-content"
          contentEditable={userType === "EDITOR"}
        />
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
