/* eslint-disable @typescript-eslint/no-unused-vars */ // Need for action creators
import { createSlice } from "@reduxjs/toolkit";
import { User } from "@firebase/auth-types";

type AuthState = {
  isLoggedIn: boolean;
  currentUser: User | null;
  codeSent: boolean;
  loading: boolean;
  error: string | null;
  UserData: any;
};

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
  codeSent: false,
  loading: true,
  error: null,
  UserData: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logInPhone: (state, action): AuthState => state,
    logInGoogle: (state): AuthState => state,
    sendCodePhone: (state, action): AuthState => state,
    startObserver: (state): AuthState => state,
    finishObserver: (state): AuthState => state,
    logOut: (state): AuthState => state,
    // signUpStart: (state): AuthState => state,
    fetchUserStart: (state): AuthState => ({
      ...state,
      loading: true,
    }),
    fetchUserSuccess: (state, action): AuthState => ({
      ...state,
      loading: false,
      isLoggedIn: true,
      currentUser: action.payload,
    }),
    fetchUserFailure: (state, action): AuthState => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    codeSent: (state, action): AuthState => ({
      ...state,
      codeSent: action.payload,
      loading: false,
    }),
    logOutSuccess: (state): AuthState => ({
      ...state,
      loading: false,
      isLoggedIn: false,
      currentUser: null,
    }),
    signUpSuccess: (state, action): AuthState => ({
      ...state,
      currentUser: action.payload,
      error: null,
    }),
    signUpFailed: (state, action): AuthState => ({
      ...state,
      error: action.payload,
    }),
    signUpStart: (state, action): AuthState => ({
      ...state,
      UserData: action.payload,
    }),
  },
});

export const {
  logInPhone,
  logInGoogle,
  sendCodePhone,
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  codeSent,
  logOut,
  logOutSuccess,
  startObserver,
  finishObserver,
  signUpSuccess,
  signUpFailed,
  signUpStart,
} = auth.actions;

export default auth.reducer;
