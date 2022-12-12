import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "~/pages/Login";
import Chat from "~/pages/Chat";
import Err404 from "~/pages/Err404";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
