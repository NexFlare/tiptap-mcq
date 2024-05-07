import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import React, { useContext } from "react";
import { UserContext } from "../../UserProvider";

const Component: React.FC<NodeViewProps> = (props) => {
  const { userType } = useContext(UserContext);

  return (
    <NodeViewWrapper className="Option-wrapper my-2 elevation">
      <div className="mx-2 p-2 border-solid border rounded-md border-gray-800 flex row bg-white">
        <input type="radio" className="mr-2" name={props.node.attrs.id} />
        <NodeViewContent contentEditable={userType === "EDITOR"} />
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
