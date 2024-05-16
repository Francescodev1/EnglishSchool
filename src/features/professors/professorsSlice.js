// /src/features/professors/professorsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProfessors } from '../../api/professorsAPI';

export const loadProfessors = createAsyncThunk('professors/fetchProfessors', async () => {
  const professors = await fetchProfessors();
  return professors;
});

const professorsSlice = createSlice({
  name: 'professors',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProfessors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadProfessors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(loadProfessors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default professorsSlice.reducer;
