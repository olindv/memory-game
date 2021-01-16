import { getImgRequest, getImgSuccess, getImgFailure } from "./actions";
import { serverGetImg } from "./api.js";

export const loadMiddleWare = (store) => (next) => async (action) => {
  if (action.type === getImgRequest().type) {
    const result = await serverGetImg();
    if (result) {
      const resultImgArr = result.slice(0, 8);
      store.dispatch(getImgSuccess(resultImgArr));
    } else {
      store.dispatch(getImgFailure());
    }
  } else {
    next(action);
  }
};
