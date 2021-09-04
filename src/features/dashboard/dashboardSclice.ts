import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Student } from "models";

export interface DashboardStatistics {
    maleCount: number,
    femaleCount: number,
    hightMarkCount: number,
    lowMarkCount: number,
}

export interface RankingByCity{
    cityId: string;
    rankingList: Student[];
}
export interface DashboardState { 
    loading: boolean;
    statistics: DashboardStatistics ;
    hightestStudentList: Student[];
    lowestStudentList: Student[];
    rankingByCityList: RankingByCity[];
}

const initialState: DashboardState = {
    loading: false,
    statistics: {
        maleCount: 0,
        femaleCount: 0,
        hightMarkCount: 0,
        lowMarkCount: 0,
    },
    hightestStudentList: [],
    lowestStudentList:[],
    rankingByCityList: [],
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers:{
        fetchData: (state) =>{
            state.loading = true;
        },
        fetchDataSuuccess: (state) =>{
            state.loading = false;
        },
        fetchDataFailed: (state) =>{
            state.loading = false;
        },  
        setStatistics: (state, action: PayloadAction<DashboardStatistics>) =>{
            state.statistics = action.payload;
        },
        setHightestStudentList: (state, action: PayloadAction<Student[]>) =>{
            state.hightestStudentList = action.payload;
        },
        setLowestStudentList: (state, action: PayloadAction<Student[]>) =>{
            state.lowestStudentList = action.payload;
        },
        setRankingByCityList: (state, action: PayloadAction<RankingByCity[]>) =>{
            state.rankingByCityList = action.payload;
        }
    }
})

// action methods
export const dashboardAction = dashboardSlice.actions

// selected
export const selectLoading = (state: RootState) =>  state.dashboard.loading
export const selectStatistics = (state: RootState) =>  state.dashboard.statistics
export const selectHightestStudentList = (state: RootState) =>  state.dashboard.hightestStudentList
export const selectLowestStudentList = (state: RootState) =>  state.dashboard.lowestStudentList
export const selectRankingByCityList = (state: RootState) =>  state.dashboard.rankingByCityList

//reducers

export default dashboardSlice.reducer;