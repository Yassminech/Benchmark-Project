import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
    loading: false,
    isProfileActivated: false, 
    usersCount: null,
    profiles: [],
  },
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
    updateProfile(state, action) {
      state.profile = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsProfileActivated(state) { 
      state.isProfileActivated = true; 
      state.loading = false;
    },
    clearIsProfileActivated(state) { 
      state.isProfileActivated = false; 
      state.loading = false;
    },
    setUserCount(state, action) {
      state.usersCount = action.payload;
    },
    setProfiles(state, action) {
      state.profiles = action.payload;
    }
  },
});

const profileReducer = profileSlice.reducer;
const profileActions = profileSlice.actions;

export { profileActions, profileReducer };