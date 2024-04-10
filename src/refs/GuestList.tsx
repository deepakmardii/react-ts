import { useEffect, useRef, useState } from "react";

const GuestList = () => {
  const input = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [guests, setGuest] = useState<string[]>([]);

  useEffect(() => {
    if (!input.current) {
      return;
    }
    input.current.focus();
  }, []);

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
          ref={input}
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
