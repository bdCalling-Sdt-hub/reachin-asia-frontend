import { baseApi } from '@/redux/base/baseApi';
import authReducer from '@/redux/features/auth/authSlice';
import categoryFilterReducer from '@/redux/features/categoryFilter/categoryFilterSlice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
      key: 'auth',
      storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const baseReducer = {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: persistedAuthReducer,
      categoryFilter: categoryFilterReducer,
};
