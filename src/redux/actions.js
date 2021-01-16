export const GET_IMG_REQUEST = 'GET_IMG_REQUEST';
export const GET_IMG_SUCCESS = 'GET_IMG_SUCCESS';
export const GET_IMG_FAILURE = 'GET_IMG_FAILURE';

export const getImgRequest = (payload) => {
  return {
    type: GET_IMG_REQUEST,
    payload,
  };
};

export const getImgSuccess = (payload) => {
  return {
    type: GET_IMG_SUCCESS,
    payload,
  };
};

export const getImgFailure = () => {
  return {
    type: GET_IMG_FAILURE,
  };
};
