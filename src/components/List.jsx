import React from "react";

const List = () => {
  const names = [
    "Victor",
    "Jimmy",
    "Adam",
    "Toyne",
    "Emma",
    "Ghafar",
    "Soludo",
  ];
  const users = [
    { name: "Victor", age: 23, gender: "Male" },
    { name: "Amaka", age: 20, gender: "Female" },
    { name: "Ghafar", age: 21, gender: "Male" },
  ];

  return (
    <div className="App">
      <center>working with list in react js.</center>

      {users.map((user, id) => {
        return (
          <UserComp name={user.name} age={user.age} gender={user.gender} />
        );
      })}
    </div>
  );
};

const UserComp = ({ name, age, gender }) => {
  return (
    <div>
      {name}, {age}, {gender}
    </div>
  );
};

export default List;
