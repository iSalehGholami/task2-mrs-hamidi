// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    name: string | null;
    family: string | null;
    phoneNumber: string | null;
    nationalCode: string | null;
    emailAddress: string | null;
    password: string | null;
    loggedIn: boolean;
}

const initialState: UserState = {
    name: null,
    family: null,
    phoneNumber: null,
    nationalCode: null,
    emailAddress: null,
    password: null,
    loggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signup: (state, action: PayloadAction<Omit<UserState, 'loggedIn'>>) => {
            state.name = action.payload.name;
            state.family = action.payload.family;
            state.phoneNumber = action.payload.phoneNumber;
            state.nationalCode = action.payload.nationalCode;
            state.emailAddress = action.payload.emailAddress;
            state.password = action.payload.password;
        },
        login: (state, action: PayloadAction<{ phoneNumber: string; password: string }>) => {
            if (state.phoneNumber === action.payload.phoneNumber && state.password === action.payload.password) {
                state.loggedIn = true;
            }
        },
        logout: (state) => {
            state.loggedIn = false;
        },
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
