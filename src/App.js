import './App.css';
import ReviewsPage from "./components/ReviewsPage"
import { Routes, Route } from "react-router-dom";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element=<ReviewsPage /> />
        <Route path="/reviews/:review_id" element=<Review /> />
      </Routes>
    </div>
  );
}

export default App;
