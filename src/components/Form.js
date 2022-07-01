import { useState } from "react";
import { useContext } from "react";
import Context from "../context/Context";

const Form = () => {
  // State for input fields
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  // Context stuff
  const { addUser } = useContext(Context);

  // handleInputChange
  const handleInputChange = (e) => {
    if (e.target.id === "firstName") {
      setUserInfo({ ...userInfo, firstName: e.target.value });
    } else if (e.target.id === "lastName") {
      setUserInfo({ ...userInfo, lastName: e.target.value });
    } else if (e.target.id === "street") {
      setUserInfo({ ...userInfo, street: e.target.value });
    } else if (e.target.id === "city") {
      setUserInfo({ ...userInfo, city: e.target.value });
    }
  };

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      userInfo.firstName === "" ||
      userInfo.lastName === "" ||
      userInfo.street === "" ||
      userInfo.city === ""
    ) {
      alert("Fill all data");
    } else {
      addUser(userInfo);
      setUserInfo({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
      });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="main-form">
      <div className="form-item form-item1">
        <label htmlFor="firstName">Firstname</label>
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          id="firstName"
          placeholder="Firstname"
          value={userInfo.firstName}
        />
      </div>
      <div className="form-item form-item1">
        <label htmlFor="lastName">Lastname</label>
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          id="lastName"
          placeholder="Lastname"
          value={userInfo.lastName}
        />
      </div>
      <div className="form-item form-item2">
        <label htmlFor="street">Street</label>
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          id="street"
          placeholder="Street"
          value={userInfo.street}
        />
      </div>
      <div className="form-item form-item2">
        <label htmlFor="city">City</label>
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          id="city"
          placeholder="City"
          value={userInfo.city}
        />
      </div>
      <button type="submit" className="btn">
        Insert
      </button>
    </form>
  );
};

export default Form;
