import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import React from "react";

const Component: React.FC<NodeViewProps> = (props) => {
  console.log("Option attrs is", props.node.attrs);

  return (
    <NodeViewWrapper className="Option-wrapper my-2 elevation">
      <div className="mx-2 p-2 border-solid border rounded-md border-gray-800 flex row bg-white">
        <input type="radio" className="mr-2" name={props.node.attrs.id} />
        <NodeViewContent />
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
