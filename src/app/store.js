// /src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../features/quiz/quizSlice';

import professorsReducer from '../features/professors/professorsSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    professors: professorsReducer
  },
});
