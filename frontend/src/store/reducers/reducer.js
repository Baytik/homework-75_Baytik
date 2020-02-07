import {FETCH_DECODE_SUCCESS, FETCH_ENCODE_SUCCESS} from "../actions/actions";

const initialState = {
  encode: '',
  password: '',
  decode: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ENCODE_SUCCESS:
            return {...state, encode: action.encode.data.encode, password: action.password};
        case FETCH_DECODE_SUCCESS:
            return {...state, decode: action.decode.data.decode, password: action.password};
        default:
            return state;
    }
};

export default reducer;