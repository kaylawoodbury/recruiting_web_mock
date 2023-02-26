import { reducer as candidateReducer } from './candidate-store';

const rootReducer = {
  candidates: candidateReducer,
};

export default rootReducer;