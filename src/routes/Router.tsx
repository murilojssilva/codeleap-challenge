import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "../pages/Loading";
import { Main } from "../pages/Main";
import { SignUp } from "../pages/SignUp";

import { DefaultLayout } from "../pages/_layouts/default";
import { ItemLayout } from "../pages/_layouts/items";

export function Router() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {loading ? (
          <Route path="/" element={<Loading />} />
        ) : (
          <Route path="/" element={<SignUp />} />
        )}
      </Route>
      <Route path="/" element={<ItemLayout />}>
        <Route path="/home" element={<Main />} />
      </Route>
    </Routes>
  );
}
