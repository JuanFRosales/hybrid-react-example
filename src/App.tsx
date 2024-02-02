import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import Profile from "./views/Profile";
import Single from "./views/Single";
import Upload from "./views/Upload";
import Layout from "./views/Layout";

const App = () => {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/single" element={<Single />} />
        <Route path="/upload" element={<Upload />} />
        </Route>
    </Routes>
  </Router>
  );
};

export default App;
