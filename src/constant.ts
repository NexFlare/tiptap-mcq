export const defaultHeader = {
  "Content-Type": "application/json",
};

export const baseUrl = "http://localhost:8080/api/v1";

export const baseContent = `<h2>
Hi UpLimit Team,
</h2>
<p>
  Here are a few ways to create a question:
</p>
<ol>
  <li>
    1. Click on <b>Create Question</b> at the top.
  </li>
  <li>
    2. Type and select any prompt and press <b>(CMD /  CTRL) + /</b>. AI will automatically generate a question for you.
  </li>
</ol>
<p>
<br/>
Make sure you press the <b>Add/Update</b> button to save your question.
</p>
<br/>
`;

export const url = {
  question: `${baseUrl}/question`,
  questions: `${baseUrl}/questions`,
  questionAI: `${baseUrl}/question/ai`,
  answer: `${baseUrl}/answer`,
};
