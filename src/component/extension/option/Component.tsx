import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import React, { useContext, useState } from "react";
import { UserContext } from "../../provider/UserProvider";

const Component: React.FC<NodeViewProps> = (props) => {
  const { userType } = useContext(UserContext);
  const [checked, setChecked] = useState<boolean>(props.node.attrs.checked);

  return (
    <NodeViewWrapper className="Option-wrapper my-2 elevation">
      <div className="mx-2 p-2 border-solid border rounded-md border-gray-400 flex row bg-white">
        <input
          type="radio"
          className="mr-2"
          name={props.node.attrs.id}
          checked={checked}
          onChange={() => {}}
          onClick={() => {
            setChecked(true);
          }}
        />
        <NodeViewContent contentEditable={userType === "EDITOR"} />
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
