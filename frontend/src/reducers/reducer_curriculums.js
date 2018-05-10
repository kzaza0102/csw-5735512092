import {FETCH_CRCLS, ADD_CRCL, GET_CRCL, DELETE_CRCL, UPDATE_CRCL} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CRCLS:
            // console.log(action.payload.data)
            return action.payload.data;
        // return _.mapKeys(action.payload.data,'id');
        case ADD_CRCL:
            return null;
        case GET_CRCL:
            // return null;
            console.log(action.payload.data);
            return {
                ...state,
                // [action.payload.data.id]:action.payload.data
            };
        case DELETE_CRCL:
            return null;
        case UPDATE_CRCL:
            return null;
        default:
            return state;
    }
}
