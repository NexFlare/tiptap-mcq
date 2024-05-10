import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import React from "react";
import useMCQ from "../../../hooks/useMcq";
import { ChevronRightIcon, XCircleFillIcon } from "@primer/octicons-react";

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
              className="bg-red-800 hover:bg-red-700 py-1 px-2 text-slate-50 rounded place-content-end font-semibold mr-2 flex items-center"
              onClick={onClearClick}
            >
              <span>Clear</span>
              <XCircleFillIcon size={12} className="ml-1" />
            </button>
          )}

          <div
            className="bg-violet-800 hover:bg-violet-700 py-1 px-2 text-slate-50 rounded place-content-end font-semibold flex items-center"
            onClick={onActionButtonClick}
          >
            <span>
              {userType === "EDITOR" ? (id ? "Update" : "Add") : "Submit"}
            </span>
            <ChevronRightIcon size={12} className="ml-1" />
          </div>
        </div>
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
