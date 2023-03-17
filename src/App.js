import './App.css';
import Header from "./components/Header"
import ReviewsPage from "./components/ReviewsPage"
import { Routes, Route } from "react-router-dom";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element=<ReviewsPage /> />
        <Route path="/reviews/:review_id" element=<Review /> />
      </Routes>
    </div>
  );
}

export default App;
