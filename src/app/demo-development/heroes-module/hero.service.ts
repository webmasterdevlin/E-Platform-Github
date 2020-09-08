import { IHeroModel } from './hero.types';
import { api } from '../../../utils/axios.config';

export async function getHeroesAxios() {
  return await api.get<IHeroModel[]>('heroes');
}

export async function deleteHeroAxios(id: string) {
  return await api.delete<void>('heroes/' + id);
}

export async function postHeroAxios(newHero: IHeroModel) {
  return await api.post<IHeroModel>('heroes', newHero);
}

export async function putHeroAxios(updateHero: IHeroModel) {
  return await api.put<void>('heroes', updateHero);
}
