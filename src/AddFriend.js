import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";

const AddFriend = () => {

  const history = useHistory();

  const [addFriend, setAddFriend] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("api/friends", addFriend)
      .then((res) => {
        console.log(res);
        setAddFriend(res);
        history.push("/friends");
        
      })
      .catch((err) => console.log(err.response.data.error));
  };

  const handleChange = (e) => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formContainer"> 
    <form onSubmit={handleSubmit}>
      <div className="formElement">
        <h1>Add Friend</h1>
        <label htmlFor="name">USERNAME</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={addFriend.name}
          onChange={handleChange}
        />
      </div>
      <div className="formElement"> 
        <label htmlFor="email">EMAIL</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          value={addFriend.email}
          onChange={handleChange}
        />
      </div>
      <button>SUBMIT</button>
    </form>
  </div>
  );
};

export default AddFriend;