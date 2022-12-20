import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModalOpen: (state) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: (state) => {
            state.isDateModalOpen = false
        }
    }
});


// Action creators are generated for each case reducer function
export const {onOpenDateModalOpen, onCloseDateModal } = uiSlice.actions;