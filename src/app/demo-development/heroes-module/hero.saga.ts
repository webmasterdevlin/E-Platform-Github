import { put, takeEvery, call } from 'redux-saga/effects';
import { all } from '@redux-saga/core/effects';
import {
  getHeroesAxios,
  deleteHeroAxios,
  postHeroAxios,
  putHeroAxios,
} from './hero.service';
import { HeroActionTypes } from './hero.types';

/* function generator implementations of Saga */
function* fetchingHeroes() {
  console.log('HELLO_fetchingHeroes()');

  try {
    const { data } = yield call(getHeroesAxios); // saga
    yield put({ type: HeroActionTypes.FETCH_HEROES_SUCCESS, payload: data });
  } catch (e) {
    console.log(e.message);
    yield put({
      type: HeroActionTypes.FETCH_HEROES_FAIL,
      payload: e.message,
    });
  }
}

function* removingHero({ payload: id }: any) {
  try {
    yield call(deleteHeroAxios, id);
    yield put({ type: HeroActionTypes.REMOVE_HERO_SUCCESS, payload: id });
  } catch (e) {
    console.log(e.message);
    yield put({ type: HeroActionTypes.REMOVE_HERO_FAIL, payload: e.message });
  }
}

function* addingHero({ payload: newHero }: any) {
  try {
    const { data } = yield call(postHeroAxios, newHero);
    yield put({ type: HeroActionTypes.ADD_HERO_SUCCESS, payload: data });
  } catch (e) {
    console.log(e.message);
    yield put({ type: HeroActionTypes.ADD_HERO_FAIL });
  }
}

function* updatingHero({ payload: updatedHero }: any) {
  try {
    yield call(putHeroAxios, updatedHero);
    yield put({
      type: HeroActionTypes.UPDATE_HERO_SUCCESS,
      payload: updatedHero,
    });
  } catch (e) {
    yield put({
      type: HeroActionTypes.UPDATE_HERO_FAIL,
      payload: e.message,
    });
  }
}

/* Saga watches the actions */
function* watchFetchingHeroes() {
  yield takeEvery(HeroActionTypes.FETCH_HEROES_REQUEST, fetchingHeroes);
}

function* watchRemovingHero() {
  yield takeEvery(HeroActionTypes.REMOVE_HERO_REQUEST, removingHero);
}

function* watchAddingHero() {
  yield takeEvery(HeroActionTypes.ADD_HERO_REQUEST, addingHero);
}

function* watchUpdatingHero() {
  yield takeEvery(HeroActionTypes.UPDATE_HERO_REQUEST, updatingHero);
}

/* Saga sends all the watchers to the sagaMiddleware to run. */
export function* heroSaga() {
  yield all([
    watchFetchingHeroes(),
    watchRemovingHero(),
    watchAddingHero(),
    watchUpdatingHero(),
  ]);
}
