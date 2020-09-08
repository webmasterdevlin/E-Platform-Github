import { api } from '../../../../../utils/axios.config';
import { OfferingModel } from '../CreateOfferingsContent/all-steps/schema/create-offerings.value';

const endpoint = 'my-offerings/';

export async function getOfferingsAxios() {
  return await api.get<OfferingModel[]>(endpoint);
}

export async function getOfferingByIdAxios(id: string) {
  return await api.get<OfferingModel>(endpoint + id);
}
