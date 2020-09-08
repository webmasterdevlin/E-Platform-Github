import { IHeroState, HeroActionTypes, IHeroModel } from './hero.types';

const initialState: IHeroState = {
  heroes: [],
  hero: {} as IHeroModel,
  loading: false,
  error: '',
};

interface IAction {
  type: string;
  payload: any;
}

export const heroReducer = (
  state: IHeroState = initialState,
  action: IAction,
): IHeroState => {
  switch (action.type) {
    case HeroActionTypes.FETCH_HEROES_REQUEST:
      return { ...state, loading: true };
    case HeroActionTypes.FETCH_HEROES_SUCCESS:
      return { ...state, loading: false, heroes: action.payload };
    case HeroActionTypes.FETCH_HEROES_FAIL:
      return { ...state, loading: false, error: action.payload };

    case HeroActionTypes.REMOVE_HERO_REQUEST:
      return { ...state, loading: true };
    case HeroActionTypes.REMOVE_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        heroes: state.heroes.filter(hero => hero.id !== action.payload),
      };
    case HeroActionTypes.REMOVE_HERO_FAIL:
      return { ...state, loading: false, error: action.payload };

    case HeroActionTypes.ADD_HERO_REQUEST:
      return { ...state, loading: true };
    case HeroActionTypes.ADD_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        heroes: [...state.heroes, action.payload],
      };
    case HeroActionTypes.ADD_HERO_FAIL:
      return { ...state, loading: false, error: action.payload };

    case HeroActionTypes.UPDATE_HERO_REQUEST:
      return { ...state, loading: true };
    case HeroActionTypes.UPDATE_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        heroes: state.heroes.map(hero =>
          hero.id === action.payload.id ? action.payload : hero,
        ),
      };
    case HeroActionTypes.UPDATE_HERO_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
