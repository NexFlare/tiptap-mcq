import { Content } from "@tiptap/react";
import { MCQResponse } from "../../types/mcq.types";
import { generateId } from "..";

export const transformMcqResponse = (response: MCQResponse[]): Content => {
  const transformedResponse: Content = response.map((mcq) => {
    const mcqId = mcq.id;
    if (!mcq.id) {
      mcq.id = generateId();
    }
    const options = mcq.options.map((option) => {
      return {
        type: "options",
        content: [{ type: "text", text: option.option }],
        attrs: { name: mcq.id, checked: option.isCorrect },
      };
    });
    return {
      type: "mcq",
      attrs: {
        id: mcq.id,
        mcqId,
      },
      content: [
        {
          type: "question",
          content: [{ type: "text", text: mcq.question }],
        },
        ...options,
      ],
    };
  });
  return transformedResponse;
};
