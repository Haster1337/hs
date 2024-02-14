import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import Loading from './Loading'

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    loading: Loading
});

export default reducers;