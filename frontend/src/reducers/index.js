import { combineReducers } from 'redux';
import CurriculumsReducer from './reducer_curriculums';
import CurriculumEditReducer from './reducer_edit'

const rootReducer = combineReducers({
    curriculums: CurriculumsReducer,
    editCurriculum: CurriculumEditReducer
});

export default rootReducer;
