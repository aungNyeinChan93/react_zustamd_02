import React from "react";
import useUserStore from "../../store/useUserStore";

const TestUsers = () => {
  const { users, changeCity, addUser } = useUserStore((store) => store);
  return (
    <React.Fragment>
      <section>
        {users &&
          Array.isArray(users) &&
          users?.map((user) => {
            return (
              <div
                onClick={() => changeCity(user.id, "London")}
                key={user.id}
                className="p-2 text-lg bg-amber-100  relative"
              >
                {user.name} || {user?.address?.city} ||{user.address.country}
                <button
                  type="button"
                  className=" absolute right-2 "
                  onClick={() =>
                    addUser({
                      ...user,
                      id: users.length + 1,
                      name: user.name + user.id,
                    })
                  }
                >
                  Add User
                </button>
              </div>
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default TestUsers;
