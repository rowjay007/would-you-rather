import { saveQuestionAnswer } from "../utils/api";
import { answeredQuestion } from "../actions/questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";
export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function saveUserAnswer(authUser, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    authUser,
    qid,
    answer,
  };
}



export function saveUserQuestion({ id, author }) {
  return {
    type: SAVE_USER_QUESTION,
    id,
    author,
  };
}


export function handleSaveQuestionAnswer(authUser, qid, answer) {
  return (dispatch) => {
    dispatch(saveUserAnswer(authUser, qid, answer));
    dispatch(answeredQuestion(authUser, qid, answer));

    return saveQuestionAnswer(authUser, qid, answer).catch((e) => {
      console.warn("Error in handleSaveQuestionAnswer:", e);
    });
  };
}