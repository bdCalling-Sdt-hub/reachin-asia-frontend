import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface FilterState {
      searchText: string;
      selectedCategory: string | null;
}

const initialState: FilterState = {
      searchText: '',
      selectedCategory: null,
};

const filterSlice = createSlice({
      name: 'filter',
      initialState,
      reducers: {
            setSearchText: (state, action: PayloadAction<string>) => {
                  state.searchText = action.payload;
            },
            setSelectedCategory: (state, action: PayloadAction<string | null>) => {
                  state.selectedCategory = action.payload;
            },
      },
});

export const { setSearchText, setSelectedCategory } = filterSlice.actions;

// Selectors
export const selectSearchText = (state: { filter: FilterState }) => state.filter.searchText;
export const selectSelectedCategory = (state: { filter: FilterState }) => state.filter.selectedCategory;

export default filterSlice.reducer;
