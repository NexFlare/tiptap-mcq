import { UserType } from "../../component/provider/UserProvider";
import { defaultHeader, url } from "../../constant";
import { ResponseObject } from "../../types/index.types";
import { MCQ, MCQResponse, MCQUpdateRequest } from "../../types/mcq.types";
import { callApi } from "../../util/apiHelper";

export const getAllQuestions = async (
  userType: UserType
): Promise<ResponseObject<MCQResponse[]>> => {
  const response = callApi<ResponseObject<MCQResponse[]>>({
    path: `${url.questions}?userType=${userType}`,
    method: "GET",
    headers: defaultHeader,
  });
  return response;
};

export const createQuestion = async (
  mcq: MCQ
): Promise<ResponseObject<MCQResponse>> => {
  const response = await callApi<ResponseObject<MCQResponse>>({
    path: url.question,
    method: "POST",
    headers: defaultHeader,
    body: mcq,
  });
  return response;
};

export const updateQuestion = async (
  mcq: MCQUpdateRequest
): Promise<ResponseObject<MCQResponse>> => {
  const response = await callApi<ResponseObject<MCQResponse>>({
    path: `${url.question}`,
    method: "PUT",
    headers: defaultHeader,
    body: mcq,
  });
  return response;
};

export const answerQuestion = async (
  questionId: string,
  answer: string
): Promise<ResponseObject<{ isCorrect: boolean }>> => {
  const response = await callApi<ResponseObject<{ isCorrect: boolean }>>({
    path: url.answer,
    method: "POST",
    headers: defaultHeader,
    body: { answer, questionId },
  });
  return response;
};

export const deleteQuestion = async (
  questionId: string
): Promise<ResponseObject<any>> => {
  const response = await callApi({
    path: `${url.question}/${questionId}`,
    method: "DELETE",
    headers: defaultHeader,
  });
  return response;
};

export const getGeneratedQuestion = async (
  prompt: string
): Promise<ResponseObject<MCQResponse>> => {
  const response = await callApi<ResponseObject<MCQResponse>>({
    path: `${url.questionAI}?prompt=${prompt}`,
    method: "GET",
    headers: defaultHeader,
  });
  return response;
};
