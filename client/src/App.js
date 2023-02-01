import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import CodeForInterview from './components/CodeForInterview';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeForInterview />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
