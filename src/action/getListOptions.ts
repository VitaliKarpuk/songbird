import { GET_LIST_OPTIONS } from '../constants/constants';

const getListOptions = (listOptions: Array<[]>) => {
  return {
    type: GET_LIST_OPTIONS,
  payload: listOptions
  }
}

export default getListOptions;