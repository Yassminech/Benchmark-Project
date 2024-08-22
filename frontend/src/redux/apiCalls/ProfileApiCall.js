import { profileActions } from "../slices/profileSlice";
import { authActions } from "../slices/authSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Get User Profile
export function getUserProfile(userId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/users/profile/${userId}`);
      dispatch(profileActions.setProfile(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Update Profile
export function updateProfile(userId,profile) {
    return async (dispatch, getState) => {
      try {
        const { data } = await request.put(
          `/api/users/profile/${userId}`,
          profile,
          {
            headers: {
              Authorization: "Bearer " + getState().auth.user.token,
            },
          }
        );
  
        dispatch(profileActions.updateProfile(data));
        dispatch(authActions.setUsername(data.username));
  
        // modify the user in local storage with new username
        const user = JSON.parse(localStorage.getItem("userInfo"));
        user.username = data?.username;
        localStorage.setItem("userInfo", JSON.stringify(user));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }

  // Activate user account
export function activateAccount(userId) {
    return async (dispatch, getState) => {
      try {
        await request.put(`/api/users/activate/${userId}`, null, {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        });
        // Update user status in profile
        dispatch(profileActions.setUserActivation(userId, true));
        toast.success("User account successfully activated");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }
  
  // Desactivate user account
  export function deactivateAccount(userId) {
    return async (dispatch, getState) => {
      try {
        await request.put(`/api/users/deactivate/${userId}`, null, {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        });
        // Update user status in profile
        dispatch(profileActions.setUserActivation(userId, false));
        toast.success("User account successfully disabled");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }

// Get Users Count (for admin dashboard)
export function getUsersCount() {
    return async (dispatch, getState) => {
      try {
        const { data } = await request.get(
          `/api/users/count`,
          {
            headers: {
              Authorization: "Bearer " + getState().auth.user.token,
            },
          }
        );
  
        dispatch(profileActions.setUserCount(data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }
  
  // Get All Users Profile (for admin dashboard)
  export function getAllUsersProfile() {
    return async (dispatch, getState) => {
      try {
        const { data } = await request.get(
          `/api/users/profile`,
          {
            headers: {
              Authorization: "Bearer " + getState().auth.user.token,
            },
          }
        );
  
        dispatch(profileActions.setProfiles(data));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  }