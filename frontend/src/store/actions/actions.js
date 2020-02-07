import axiosAPI from "../../axiosAPI";

export const FETCH_ENCODE_SUCCESS = 'FETCH_ENCODE_SUCCESS';
export const FETCH_DECODE_SUCCESS = 'FETCH_DECODE_SUCCESS';

export const fetchEncodeSuccess = (encode) => ({type: FETCH_ENCODE_SUCCESS, encode});
export const fetchDecodeSuccess = (decode) => ({type: FETCH_DECODE_SUCCESS, decode});

export const fetchEncode = (encode) => {
  return async (dispatch) => {
      const response = await axiosAPI.post('/encode', encode);
      dispatch(fetchEncodeSuccess(response));
  }
};

export const fetchDecode = (decode) => {
  return async (dispatch) => {
      const response = await axiosAPI.post('/decode', decode);
      dispatch(fetchDecodeSuccess(response));
  }
};