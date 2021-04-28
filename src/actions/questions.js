import { saveQuestion } from '../utils/api';
import { addToQuestionToUser } from '../actions/users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWERED_QUESTION = 'ANSWERED_QUESTION';
export const ADD_TO_QUESTION = 'ADD_TO_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function answeredQuestion(authUser, qid, answer) {
  return {
    type: ANSWERED_QUESTION,
    authUser,
    qid,
    answer
  };
}

function addToQuestion(question) {
  return {
    type: ADD_TO_QUESTION,
    question
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addToQuestion(question));
        dispatch(addToQuestionToUser(question));
      }
    );
  };
}