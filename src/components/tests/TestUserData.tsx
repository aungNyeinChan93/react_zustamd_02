/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import useUserDataStore from "../../store/useUserDataStore";

interface User {
  username: string | undefined;
  email: string | undefined;
}

const TestUserData = () => {
  const { setEmail, setName, username, email } = useUserDataStore(
    (store) => store
  );

  const [user, setUser] = useState<Partial<User>>({
    username: "",
    email: "",
  });

  const submitUser = (e: any) => {
    e.preventDefault();
    if (user.username?.trim() !== "" || user.email?.trim() !== "") {
      setName(user.username);
      setEmail(user.email);
      alert(user.username);
      setUser({});
    }
  };

  return (
    <React.Fragment>
      <section>
        {username} ||{email}
        <form onSubmit={submitUser}>
          <input
            type="text"
            name="username"
            id=""
            placeholder="name"
            onChange={(e) =>
              setUser((pre: any) => ({ ...pre, username: e.target.value }))
            }
          />
          <input
            type="text"
            name="email"
            id=""
            placeholder="email"
            onChange={(e) =>
              setUser((pre) => ({ ...pre, email: e.target.value }))
            }
          />

          <button type="submit">Add</button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default TestUserData;
