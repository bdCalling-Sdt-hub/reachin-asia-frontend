import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface CategoryFilterState {
      selectedCategory: string | null;
}

const initialState: CategoryFilterState = {
      selectedCategory: null,
};

const categoryFilterSlice = createSlice({
      name: 'categoryFilter',
      initialState,
      reducers: {
            setSelectedCategory: (state, action: PayloadAction<string | null>) => {
                  state.selectedCategory = action.payload;
            },
      },
});

export const { setSelectedCategory } = categoryFilterSlice.actions;

// Selector to get the selected category
export const selectSelectedCategory = (state: { categoryFilter: CategoryFilterState }) => state.categoryFilter.selectedCategory;

export default categoryFilterSlice.reducer;
