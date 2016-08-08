import Axios from 'axios'

export const ADD_CATEGORY = 'ADD_CATEGORY';

export function addCategory(id, category){
  return {
    type: ADD_CATEGORY,
    id: ...id,
    category
  }
}
