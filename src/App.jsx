import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./(pages)/Main.jsx";
import MoviePage from "./(pages)/MoviePage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MoviePage" element={<MoviePage />} />
      </Routes>
    </Router>
  );
};
export default App;
