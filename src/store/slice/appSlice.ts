import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../api/api';
import {
  calculatePercentage,
  makeLineChartData,
} from '@app/services/stateService';

type DataProp = {
  state: string;
  totalCases: number;
  activeCases: number;
  recovered: number;
  deaths: number;
  lat: number;
  lon: number;
};

interface SelectStateProp {
  pie_chart: {
    total_per: number;
    active_per: number;
    recovered_per: number;
    deaths_per: number;
  };
  line_chart: {
    total_list: any[];
    active_list: any[];
    recovered_list: any[];
    deaths_list: any[];
  };
  details: DataProp;
}

type AppState = {
  allStateData: DataProp[];
  selectState: SelectStateProp | null;
};

const initialState: AppState = {
  allStateData: [],
  selectState: null,
};

export const getCovidApi = createAsyncThunk(
  'appReducer/getCovidApi',
  async (params: any, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.get('/covid-19');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setUpdateState: (state, action) => {
      // console.log('DISP====', action.payload);
      if (!state.selectState) {
        state.selectState = {
          pie_chart: {},
          line_chart: {},
          details: {},
        } as SelectStateProp;
      }

      const stateResponse = calculatePercentage(
        action.payload.name,
        state.allStateData,
      );
      const lineData = makeLineChartData();
      state.selectState.pie_chart = stateResponse.percentage;
      state.selectState.line_chart = lineData;
      state.selectState.details = stateResponse.sateData;
    },
  },
  extraReducers: builder => {
    builder.addCase(getCovidApi.pending, (state, action) => {});
    builder.addCase(getCovidApi.fulfilled, (state, action) => {
      // console.log('DATA=====', action.payload);
      state.allStateData = action.payload?.data;
    });
    builder.addCase(getCovidApi.rejected, (state, action) => {
      state.allStateData = [];
      state.selectState = null;
    });
  },
});

export const {setUpdateState} = appSlice.actions;
export default appSlice.reducer;
