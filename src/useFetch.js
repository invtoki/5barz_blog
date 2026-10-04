import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "./firebase";

const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const isList = !path.includes("/");

    get(ref(db, path))
      .then((snapshot) => {
        if (cancelled) return;
        const val = snapshot.val();

        if (isList) {
          // { id1: {...}, id2: {...} } -> [{ id: id1, ... }, ...]
          setData(val ? Object.entries(val).map(([id, b]) => ({ id, ...b })) : []);
        } else {
          if (!val) throw Error("could not fetch data for that resource");
          setData({ id: snapshot.key, ...val });
        }
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        setIsLoading(false);
        setError(err.message);
      });

    return () => { cancelled = true; };
  }, [path]);

  return { data, isLoading, error };
};

export default useFetch;
