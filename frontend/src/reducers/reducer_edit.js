import {GET_CRCL} from '../actions';

export default function (state = {}, action) {
    switch(action.type) {
        case GET_CRCL:
            // return null;
            console.log(action.payload.data);
            return action.payload.data;
            // {
            //     [action.payload.data.id]:action.payload.data
            // };
        default:
            return state;
    }
}
