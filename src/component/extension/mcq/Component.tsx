import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import React, { useRef } from "react";

const Component: React.FC<NodeViewProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onBtnClick = () => {
    if (!ref.current) return;
    const inputs = ref.current.querySelectorAll('input[type="radio"]');
    const results = Array.from(inputs).map((input) => {
      const label = input.nextSibling?.textContent ?? "Unknown label";
      const checked = (input as HTMLInputElement).checked;
      return { label, checked };
    });
    console.log("Results", results);
    const questionDoc = ref.current.querySelector(".node-question");
    console.log("Question", questionDoc?.textContent);
  };

  return (
    <NodeViewWrapper className="Mcq-wrapper mb-4">
      <div className="p-2 bg-gray-200">
        <p className="text-slate-950 text-xs mb-4">QUICK QUIZ</p>
        <div ref={ref}>
          <NodeViewContent className="Mcq-content" ref={ref} />
        </div>

        <div className="flex justify-end pr-2">
          <button
            className="bg-cyan-500 hover:bg-cyan-600 py-1 px-2 text-slate-50 rounded place-content-end font-semibold"
            onClick={onBtnClick}
          >
            Submit
          </button>
        </div>
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
