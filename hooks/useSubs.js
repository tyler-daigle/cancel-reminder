import { useState, useEffect } from "react";

export default function useSubs() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/subscriptions?userId=1");
      const data = await res.json();
      setSubs(data);
    })();
  }, []);

  return [subs, setSubs];
}