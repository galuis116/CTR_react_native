import {saveUserDataToSharedStorage} from '../../utils/SharedPreferences';
import * as TYPES from './types';

export const load_user_data = (data) => {
  const {quote} = data;
  const widgetData = {
    title: quote?.title,
    meaning: quote?.quote,
  };
  if (quote) {
    saveUserDataToSharedStorage(widgetData);
  }
  return {
    type: TYPES.LOAD_USER_DATA,
    payload: data,
  };
};

export const load_themes = (data) => {
  return {
    type: TYPES.LOAD_THEMES,
    payload: data,
  };
};
