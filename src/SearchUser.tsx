import React, { useState } from "react";

const SearchUser: React.FC = () => {
  const data = [
    { name: "sara", age: 20 },
    { name: "john", age: 18 },
    { name: "dika", age: 38 },
  ];

  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const handleSearch = () => {
    const foundUser = data.find((data) => {
      return data.name === name;
    });

    console.log(foundUser);
    setUser(foundUser);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>Name: {user && user.name}</div>
      <div>Age: {user && user.age}</div>
    </div>
  );
};

export default SearchUser;
