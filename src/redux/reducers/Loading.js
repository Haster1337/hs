import { SHOW_LOADER, STOP_LOADING } from "redux/constants/Loading";

const initialState = {
    isLoading: false
}

const loading = (state= initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
        return {isLoading: true}
    case STOP_LOADING: 
        return {isLoading: false}
    default:
      return state;
  }
};

export default loading;