import { productActionType } from './product.actionType'

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case productActionType.LOAD_PRODUCT:
      return action.payload
    default:
      return state
  }
}
