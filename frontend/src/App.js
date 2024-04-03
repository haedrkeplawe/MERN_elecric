import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Errorr from "./pages/Errorr"
import CreateQuset from "./pages/CreateQuset"
import EditQuset from "./pages/EditQuset"
import Exams from "./pages/Exams"
import { useAuthContext } from "./hooks/useAuthContext"

function App() {
  const { user } = useAuthContext()

  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to={"/login"} />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to={"/"} />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to={"/"} />} />
            <Route path="/create" element={user ? <CreateQuset /> : <Navigate to={"/login"} />} />
            <Route path="/edit" element={user ? <EditQuset /> : <Navigate to={"/login"} />} />
            <Route path="/exams" element={user ? <Exams /> : <Navigate to={"/login"} />} />
            <Route path="/*" element={<Errorr />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
