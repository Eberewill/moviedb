import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MediaItem } from '../../../models';
import mediaService from './services/media.service';


interface AsyncState {
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean,
}

interface MediaState extends AsyncState {
    mediaItems: MediaItem[] | undefined,
    page: number | undefined,
    total_results: number | undefined,
    total_pages: number | undefined,
}

const initialState: MediaState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    mediaItems: undefined,
    page: 1,
    total_results: undefined,
    total_pages: undefined
}


export const fetchTrendingMedia = createAsyncThunk(
    'media/fetchTrends',
    async (page: number, thunkAPI) => {
        try {
            return await mediaService.fetchMediaContents(page);
        } catch (error: any) {
            console.log("Fetch Error : _", error)

            return thunkAPI.rejectWithValue('error while fetching');
        }
    }
);


export const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingMedia.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTrendingMedia.fulfilled, (state, action) => {
                state.isLoading = false

                state.mediaItems = action.payload?.results
                state.page = action.payload?.page
                state.total_pages = action.payload?.total_pages
                state.total_results = action.payload?.total_results
            })
            .addCase(fetchTrendingMedia.rejected, (state)=> {
                state.isLoading = false
                state.isError = true
            })
    }
})

export const { setPage} = mediaSlice.actions

export default mediaSlice.reducer