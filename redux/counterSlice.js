import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mblMenu: false,
	popupModal: false,
	isMint: false,
	signerAddress: "0"
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		openMblMenu: (state) => {
			state.mblMenu = true;
		},
		closeMblMenu: (state) => {
			state.mblMenu = false;
		},
		popupModalHide: (state, action) => {
			state.popupModal = false;
		},
		setMint: (state, action) => {
			state.isMint = true;
		},
		updateSignerAddress: (state, action) => {
			state.signerAddress = action.payload;
		},
	}
});

// Action creators are generated for each case reducer function
export const {
	openMblMenu,
	closeMblMenu,
	isMint,
	popupModal,
	popupModalHide,
	setMint,
	updateSignerAddress
} = counterSlice.actions;

export default counterSlice.reducer;
