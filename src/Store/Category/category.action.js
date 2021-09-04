import { categoryAction } from './category.actionTypes'

export const setCategory = (payload) => async (dispatch) => {
  dispatch({
    type: categoryAction.SET_CATEGORY,
    payload
  })
}
