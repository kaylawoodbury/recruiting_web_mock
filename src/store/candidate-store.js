import { createSlice } from '@reduxjs/toolkit';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
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
        state.loaded = true
      } else {state.data=state.data}
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
      state.data = state.data.map((value, index) => {
        if (value.id !== candidate.id) {
          return value;
        }
        return candidate
      });
    },
    deleteCandidate(state, action) {
      const candidateIds = action.payload;
      state.data = state.data.filter((candidate) => candidateIds.indexOf(candidate.id) === -1)
    },
    resetCandidates(state){
      state.data = initialState.data;
      state.loaded = false;
    },
  },
});
export const { addCandidate, deleteCandidate, getAllCandidateDetails, updateCandidate, getCandidateDetail } = candidatesSlice.actions;
export const { reducer } = candidatesSlice;

  export const setAllCandidateDetails = () => async (dispatch) => {
      const candidates = await candidateApi.getCandidates(); 
    
    dispatch(candidatesSlice.actions.getAllCandidateDetails(candidates));
  };

  export default candidatesSlice;