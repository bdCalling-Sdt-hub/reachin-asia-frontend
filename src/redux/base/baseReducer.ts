import { baseApi } from '@/redux/base/baseApi';
import authReducer from '@/redux/features/auth/authSlice';
import filterReducer from '@/redux/features/filter/filterSlice';
import { scrapingDogApi } from '@/redux/base/scrappingDogApi';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
      key: 'auth',
      storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const baseReducer = {
      [baseApi.reducerPath]: baseApi.reducer,
      [scrapingDogApi.reducerPath]: scrapingDogApi.reducer,
      auth: persistedAuthReducer,
      filter: filterReducer,
};
