import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

import {
    SET_KEYWORD,
    SET_PREV_KEYWORD,
    SET_ARTICLES,
    SET_IS_SHOW_PROGRESS,
} from '../actions/search';

const initialState = Map({
    keyword: '',
    prevKeyword: '',
    articles: [],
    isShowProgress: false,
});

export default handleActions({
    [SET_KEYWORD]: (state, { payload }) =>
        state.set('keyword', payload),

    [SET_PREV_KEYWORD]: (state, { payload }) =>
        state.set('prevKeyword', payload),

    [SET_ARTICLES]: (state, { payload }) =>
        state.set('articles', payload),

    [SET_IS_SHOW_PROGRESS]: (state, { payload }) =>
        state.set('isShowProgress', payload),
}, initialState);
