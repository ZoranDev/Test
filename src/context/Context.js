import { createContext, useState } from "react";
import { v4 as getId } from "uuid";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  // Here we create state
  const [users, setUsers] = useState([]);

  //Add user function
  const addUser = (userInfo) => {
    setUsers([...users, { mainInfo: userInfo, id: getId() }]);
  };

  // Remove user
  const removeUser = (id) => {
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };

  return (
    <Context.Provider
      value={{
        users,
        addUser,
        removeUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
