import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import React from "react";
import useMCQ from "../../../hooks/useMcq";

const Component: React.FC<NodeViewProps> = (props) => {
  const {
    onActionButtonClick,
    onClearClick,
    ref,
    id,
    userType,
    backgroundType,
  } = useMCQ(props);

  return (
    <NodeViewWrapper className="Mcq-wrapper mb-4">
      <div className={`p-2 ${backgroundType}`}>
        <p className="text-slate-950 text-xs mb-4">QUICK QUIZ</p>
        <div ref={ref}>
          <NodeViewContent
            className="Mcq-content"
            contentEditable={userType === "EDITOR"}
          />
        </div>

        <div className="flex justify-end pr-2">
          {userType === "EDITOR" && (
            <button
              className="bg-red-800 hover:bg-cyan-600 py-1 px-2 text-slate-50 rounded place-content-end font-semibold mr-2"
              onClick={onClearClick}
            >
              Clear
            </button>
          )}

          <button
            className="bg-blue-800 hover:bg-cyan-600 py-1 px-2 text-slate-50 rounded place-content-end font-semibold"
            onClick={onActionButtonClick}
          >
            {userType === "EDITOR" ? (id ? "Update" : "Add") : "Submit"}
          </button>
        </div>
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
