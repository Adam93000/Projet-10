import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    isLoggedIn: false,
    firstName: null,
    lastName: null,
    userName: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = true;
        },
        setUserProfile: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
        },
        updateUsername: (state, action) => {
            state.userName = action.payload;
        },
        setLogout: (state) => {
            state.token = null;
            state.isLoggedIn = false;
            state.firstName = null;
            state.lastName = null;
            state.userName = null;
        }
    },
});

export const { setLogin, setUserProfile, updateUsername, setLogout } = userSlice.actions;
export default userSlice.reducer;