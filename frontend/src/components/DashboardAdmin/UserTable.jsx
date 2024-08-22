import Sidebar from "./Sidebar";
import "./UserTable.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  activateAccount,
  deactivateAccount,
  getAllUsersProfile,
} from "../../redux/apiCalls/ProfileApiCall"; 

const UsersTable = () => {
  const dispatch = useDispatch();
  const { profiles, isProfileUpdated } = useSelector((state) => state.profile);

  useEffect(() => {
    const fetchUsers = () => {
      dispatch(getAllUsersProfile());
    };

    fetchUsers(); // Appel initial pour charger les utilisateurs

    // Ajoutez dispatch comme dépendance du useEffect
  }, [dispatch, isProfileUpdated]); // Inclure dispatch et isProfileUpdated comme dépendances

  // Activate or Deactivate Account Handler
  const toggleAccountStatus = (userId, isActive) => {
    const actionLabel = isActive ? "deactivate" : "activate";

    swal({
      title: `Are you sure?`,
      text: `This will ${actionLabel} the user account!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willToggle) => {
      if (willToggle) {
        if (isActive) {
          dispatch(deactivateAccount(userId));
        } else {
          dispatch(activateAccount(userId));
        }
      }
    });
  };

  return (
    <section className="table-container">
      <Sidebar/>
      <div className="table-wrapper">
        <h1 className="table-title">Users</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Count</th>
              <th>User</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="table-image">
                    <img
                      src={item.profilePhoto?.url}
                      alt=""
                      className="table-user-image"
                    />
                    <span className="table-username">{item.username}</span>
                  </div>
                </td>
                <td>{item.email}</td>
                <td>
                  <div className="table-button-group">
                    <button>
                      <Link to={`/profile/${item._id}`}>View Profile</Link>
                    </button>
                    <button onClick={() => toggleAccountStatus(item._id, item.isActive)}>
                      {item.isActive ? "Deactivate Account" : "Activate Account"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UsersTable;