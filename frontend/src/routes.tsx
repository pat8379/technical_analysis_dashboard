import NotFound from "@components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const RoutesSwitch = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
              <App />
          }
          path="/"
        >
          <Route path="/graph" element={<></>} />
        </Route>
        <Route path="/user" element={<></>} />
        <Route path="/login" element={<></>} />
        <Route path="/auth" element={<></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSwitch;
