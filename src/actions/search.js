import { createAction } from 'redux-actions';
import axios from 'axios';

export const SET_KEYWORD = '[SEARCH] SET_KEYWORD';
export const SET_PREV_KEYWORD = '[SEARCH] SET_PREV_KEYWORD';
export const SET_PAGE = '[SEARCH] SET_PAGE';
export const SET_ARTICLES = '[SEARCH] SET_ARTICLES';
export const SET_IS_SHOW_PROGRESS = '[SEARCH] SET_IS_SHOW_PROGRESS';

const newsUrl = (keyword, page) =>
    `https://newsapi.org/v2/everything?q=${keyword}&page=${page}&apiKey=0dd22c7d5e8748b38543f7227c42fa09`;

export const setKeyword = (value) =>
    async (dispatch) => dispatch(createAction(SET_KEYWORD)(value));

export const setIsShowProgress = (value) =>
    async (dispatch) => dispatch(createAction(SET_IS_SHOW_PROGRESS)(value));

export const getCurrentHeadline = () =>
    async (dispatch) => {
        dispatch(setIsShowProgress(true));
        try {
            const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0dd22c7d5e8748b38543f7227c42fa09');

            if (data.status === 'ok') {
                dispatch(createAction(SET_ARTICLES)(data.articles));
            }
        } catch (e) {
            console.error(e);
        } finally {
            dispatch(setIsShowProgress(false));
        }
    };

export const search = () =>
    async (dispatch, getState) => {
        dispatch(setIsShowProgress(true));
        try {
            const keyword = getState().search.get('keyword').trim();
            const prevKeyword = getState().search.get('prevKeyword').trim();

            if (keyword === prevKeyword) {
                return;
            }

            const { data } = await axios.get(newsUrl(keyword, 1));

            if (data.status === 'ok') {
                dispatch(createAction(SET_ARTICLES)(data.articles));
                dispatch(createAction(SET_PREV_KEYWORD)(keyword));
                await dispatch(createAction(SET_PAGE)(1));
            }
        } catch (e) {
            console.error(e);
        } finally {
            dispatch(setIsShowProgress(false));
        }
    };
