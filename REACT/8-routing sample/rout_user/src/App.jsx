import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./UserList.jsx";
import UserDetails from "./UserDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;