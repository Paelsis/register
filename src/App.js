import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Contact from "./pages/Contact"
import Schema from "./pages/Schema"
import Course from "./pages/Course"
import Register from "./components/Register"
import NoPage from "./pages/NoPage"


function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="schema" element={<Schema />} />
          <Route path="course" element={<Course />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>  
  )

}

export default App;
