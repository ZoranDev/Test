import { useContext } from "react";
import Context from "../context/Context";

const DisplayedUser = ({ userInfo }) => {
  // Context stuff
  const { removeUser } = useContext(Context);

  return (
    <div className="displayed-user">
      <div className="displayed-user-item">{userInfo.mainInfo.firstName}</div>
      <div className="displayed-user-item">{userInfo.mainInfo.lastName}</div>
      <div className="displayed-user-item">{userInfo.mainInfo.street}</div>
      <div className="displayed-user-item">{userInfo.mainInfo.city}</div>
      <button onClick={() => removeUser(userInfo.id)} className="btn">
        Remove
      </button>
    </div>
  );
};

export default DisplayedUser;
