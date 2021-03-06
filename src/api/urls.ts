import { API_KEY } from '../config';
import { URLS } from '../enums/api-urls';

//FULL REQ URLS
export const FETCH_CITY_URL =
  URLS.BASE_URL + URLS.AUTOCOMPLETE + API_KEY + URLS.BASE_PARAMS + URLS.QUERY;
export const CONDITIONS_URL = URLS.BASE_URL + URLS.CURRENT_CONDITIONS;
export const DAYS_URL = URLS.BASE_URL + URLS.DAYS_FORECAST;
export const CORDINATED_LOCATION_URL =
  URLS.BASE_URL + URLS.CORDINATED + API_KEY + URLS.BASE_PARAMS;

//PARAMS URLS
export const CONDITIONS_PARAMS = '?' + API_KEY + URLS.BASE_PARAMS;
export const DAYS_PARAMS_UNIT_C =
  '?' + API_KEY + URLS.BASE_PARAMS + URLS.DAYS_PARAMS_C;
export const DAYS_PARAMS_UNIT_F =
  '?' + API_KEY + URLS.BASE_PARAMS + URLS.DAYS_PARAMS_F;
