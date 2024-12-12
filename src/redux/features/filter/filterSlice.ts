import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface FilterState {
      searchText: string;
      selectedCategory: string | null;
      selectedCompanyType: string;
      selectedEmployee: string;
      selectedSales: string;
      selectedIndustry: string;
      selectedPrimaryIndustry: string;
      selectedSubIndustry: string;
      selectedRegion: string;
      selectedOwnership: string;
      selectedFunction: string;
      selectedSeniority: string;
      selectedEmployeeTotal: string;
      selectedSource: string;
      selectedRevenueRange: string;
      selectedManageLevel: string;
      selectedAccuracyScore: string | number;
}

const initialState: FilterState = {
      searchText: '',
      selectedCategory: null,
      selectedCompanyType: '',
      selectedEmployee: '',
      selectedSales: '',
      selectedIndustry: '',
      selectedPrimaryIndustry: '',
      selectedSubIndustry: '',

      selectedRegion: '',
      selectedOwnership: '',
      selectedFunction: '',
      selectedSeniority: '',
      selectedEmployeeTotal: '',
      selectedSource: '',
      selectedRevenueRange: '',
      selectedManageLevel: '',
      selectedAccuracyScore: 0,
};

const filterSlice = createSlice({
      name: 'filter',
      initialState,
      reducers: {
            // for homepage
            setSearchText: (state, action: PayloadAction<string>) => {
                  state.searchText = action.payload;
            },

            //for homepage
            setSelectedCategory: (state, action: PayloadAction<string | null>) => {
                  state.selectedCategory = action.payload;
            },

            // note: For company filter
            setSelectedCompanyType: (state, action: PayloadAction<string>) => {
                  state.selectedCompanyType = action.payload;
            },

            setSelectedEmployee: (state, action: PayloadAction<string>) => {
                  state.selectedEmployee = action.payload;
            },
            setSelectedSales: (state, action: PayloadAction<string>) => {
                  state.selectedSales = action.payload;
            },
            setSelectedOwnership: (state, action: PayloadAction<string>) => {
                  state.selectedOwnership = action.payload;
            },
            setSelectedIndustry: (state, action: PayloadAction<string>) => {
                  state.selectedIndustry = action.payload;
            },
            setSelectedRegion: (state, action: PayloadAction<string>) => {
                  state.selectedRegion = action.payload;
            },

            // note: For people filter
            setSelectedFunction: (state, action: PayloadAction<string>) => {
                  state.selectedFunction = action.payload;
            },
            setSelectedSeniority: (state, action: PayloadAction<string>) => {
                  state.selectedSeniority = action.payload;
            },

            setSelectedPrimaryIndustry: (state, action: PayloadAction<string>) => {
                  state.selectedPrimaryIndustry = action.payload;
            },
            setSelectedSubIndustry: (state, action: PayloadAction<string>) => {
                  state.selectedSubIndustry = action.payload;
            },
            setSelectedEmployeeTotal: (state, action: PayloadAction<string>) => {
                  state.selectedEmployeeTotal = action.payload;
            },
            setSelectedSource: (state, action: PayloadAction<string>) => {
                  state.selectedSource = action.payload;
            },
            setSelectedRevenueRange: (state, action: PayloadAction<string>) => {
                  state.selectedRevenueRange = action.payload;
            },

            setSelectedManageLevel: (state, action: PayloadAction<string>) => {
                  state.selectedManageLevel = action.payload;
            },
            setSelectedAccuracyScore: (state, action: PayloadAction<string>) => {
                  state.selectedAccuracyScore = action.payload;
            },
      },
});

export const {
      setSearchText,
      setSelectedCategory,
      setSelectedCompanyType,
      setSelectedEmployee,
      setSelectedSales,
      setSelectedIndustry,
      setSelectedPrimaryIndustry,
      setSelectedRegion,
      setSelectedOwnership,
      setSelectedFunction,
      setSelectedSeniority,
      setSelectedEmployeeTotal,
      setSelectedSource,
      setSelectedRevenueRange,
      setSelectedManageLevel,
      setSelectedSubIndustry,
      setSelectedAccuracyScore,
} = filterSlice.actions;

export default filterSlice.reducer;
