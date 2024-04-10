import React, { useState } from "react";

const GuestList = () => {
  const [name, setName] = useState("");
  const [guests, setGuest] = useState<string[]>([]);

  const handleAdd = () => {
    setName("");
    setGuest([...guests, name]);
  };
  return (
    <div>
      <div>GuestList:</div>
      <div>
        {guests.map((guest) => (
          <li>{guest}</li>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAdd}>Add Guest</button>
      </div>
    </div>
  );
};

export default GuestList;
