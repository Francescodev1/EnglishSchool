// /src/features/quiz/quizSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchQuestions } from '../../api/quizAPI';

export const loadQuestions = createAsyncThunk('quiz/fetchQuestions', async () => {
  const questions = await fetchQuestions();
  return questions;
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [],
    currentQuestionIndex: 0,
    answers: {},
    status: 'idle',
  },
  reducers: {
    setAnswer: (state, action) => {
      const { questionId, answer, isCorrect } = action.payload;
      state.answers[questionId] = { answer, isCorrect };
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = {};
    },
    // Aggiungi questa nuova azione per impostare l'indice della domanda corrente
    setCurrentQuestionIndex: (state, action) => {
      state.currentQuestionIndex = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.status = 'idle';
      })
      .addCase(loadQuestions.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { setAnswer, nextQuestion, resetQuiz, setCurrentQuestionIndex } = quizSlice.actions;
export default quizSlice.reducer;
