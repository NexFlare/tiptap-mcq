import { NodeViewProps } from "@tiptap/react";
import { useContext, useRef, useState } from "react";
import {
  answerQuestion,
  createQuestion,
  deleteQuestion,
  updateQuestion,
} from "../api/mcq";
import { UserContext, UserType } from "../component/provider/UserProvider";
import { ToastContext } from "../component/provider/ToastProvider";
import { message } from "../constant";

export interface MCQHook {
  ref: React.RefObject<HTMLDivElement>;
  onClearClick: () => void;
  onActionButtonClick: () => void;
  id: string | null;
  userType: UserType;
  backgroundType: string;
}

const useMCQ = (props: NodeViewProps): MCQHook => {
  const ref = useRef<HTMLDivElement>(null);
  const { getPos, editor, node } = props;
  const [id, setId] = useState<string | null>(props.node.attrs.mcqId);
  const { userType } = useContext(UserContext);
  const { notify } = useContext(ToastContext);
  const [backgroundType, setBackgroundType] = useState<string>("bg-gray-200");

  const onClearClick = async () => {
    try {
      if (id) {
        const response = await deleteQuestion(id);
        if (response.error) throw new Error(response.error);
      }
      const pos = getPos() - 1;
      if (editor) {
        editor
          .chain()
          .focus()
          .deleteRange({ from: pos, to: pos + node.nodeSize })
          .run();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onActionButtonClick = async () => {
    if (!ref.current) return;
    const inputs = ref.current.querySelectorAll('input[type="radio"]');
    if (userType === "EDITOR") {
      handleEditorType(inputs);
    } else {
      handleViewerType(inputs);
    }
  };

  const handleEditorType = async (inputs: NodeListOf<Element>) => {
    if (!ref.current) return;
    const options = Array.from(inputs).map((input) => {
      const option = input.nextSibling?.textContent ?? "Unknown label";
      const isCorrect = (input as HTMLInputElement).checked;
      return { option, isCorrect };
    });
    const question =
      ref.current.querySelector(".node-question")?.textContent || "";
    if (!id) {
      const mcqResponse = await createQuestion({ question, options });
      if (mcqResponse.error) {
        notify(mcqResponse.error);
        return;
      }
      notify(message.QUESTION_SUCCESS);
      setId(mcqResponse.response.id);
    } else {
      const response = await updateQuestion({ id, question, options });
      if (response.error) notify(response.error);
      else notify(message.QUESTION_UPDATE_SUCCESS);
    }
  };

  const handleViewerType = async (inputs: NodeListOf<Element>) => {
    const input = Array.from(inputs).find(
      (input) => (input as HTMLInputElement).checked
    );
    if (!input) {
      alert("Please select an option");
    } else {
      const option = input.nextSibling?.textContent ?? "Unknown label";
      if (id) {
        const response = await answerQuestion(id, option);
        if (response.error) {
          notify(response.error);
          return;
        }

        if (response.response.isCorrect) {
          setBackgroundType("bg-green-200");
        } else {
          setBackgroundType("bg-red-200");
        }
      }
    }
  };

  return {
    ref,
    onClearClick,
    onActionButtonClick,
    id,
    userType,
    backgroundType,
  };
};

export default useMCQ;
