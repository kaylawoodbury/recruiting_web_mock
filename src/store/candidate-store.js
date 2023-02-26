import { createSlice } from '@reduxjs/toolkit';
import { candidateApi } from '../services/_mockApi_/candidateDetails';

const initialState = {
  data: [],
  loaded: false
};

const candidatesSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    getAllCandidateDetails(state, action) {
      if(state.loaded !== true){
        state.data = action.payload;
        debugger
        state.loaded = true
      }
    },
    getCandidateDetail(state, action) {
      const candidate = action.payload

      state.data.byId[candidate.id] = candidate;

      if (!state.data.includes(candidate.id)) {
        state.data.push(candidate.id);
      }
    },
    addCandidate(state, action) {
      var lastItem = state.data[state.data.length - 1]
      const newId = lastItem.id++
      const data = {...action.payload, id: newId}
      
      state.data.push(data);
    },
    updateCandidate(state, action) {
      const candidate = action.payload

      state.data = state.data.map((_candidate) => {
        if (_candidate.id === candidate.id) {
          return candidate;
        }

        return _candidate;
      });
    },
    deleteCandidate(state, action) {
      const candidateId = action.payload;

      state.data = state.data.filter((candidate) => candidate.id !== candidateId);
    },
    // deleteMultipleCandidate(state, action) {
    //   state.candidates = state.candidates.filter((candidate) => candidate.id !== action.payload);
    // },
    resetCandidates(state){
      state.data = initialState.data;
      state.loaded = false;
    },
  },
});
export const { addCandidate } = candidatesSlice.actions;
export const { reducer } = candidatesSlice;

  export const setAllCandidateDetails = () => async (dispatch) => {
      const candidates = await candidateApi.getCandidates(); 
    
    dispatch(candidatesSlice.actions.getAllCandidateDetails(candidates));
  };

  export default candidatesSlice;