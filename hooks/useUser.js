import { useState, useEffect } from "react";

export default function useUser() {
  const [user, setUser] = useState({});

  useEffect(() => {

    (async () => {
      const res = await fetch("http://localhost:3000/api/user?user='tyler'");
      const data = await res.json();
      setUser(data);
    })();
  }, []);

  return [user, setUser];
}