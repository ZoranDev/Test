import { useContext } from "react";
import Context from "../context/Context";
import DisplayedUser from "./DisplayedUser";

const DisplayedUsers = () => {
  // Context stuff
  const { users } = useContext(Context);

  return (
    <div className="displayed-users">
      {users.length !== 0 &&
        users.map((user, index) => (
          <DisplayedUser key={index} userInfo={user} />
        ))}
    </div>
  );
};

export default DisplayedUsers;
