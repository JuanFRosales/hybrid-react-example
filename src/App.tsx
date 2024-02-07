import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import Profile from "./views/Profile";
import Single from "./views/Single";
import Upload from "./views/Upload";
import Layout from "./views/Layout";
import Example from './components/example';


const App = () => {

  return (
    <>
    <Example></Example>
    <Router basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/single" element={<Single />} />
        <Route path="/upload" element={<Upload />} />
        </Route>
    </Routes>
  </Router>
  </>
  );
};

export default App;
