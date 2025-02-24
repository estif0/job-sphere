import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { SavedJobs } from "./components/SavedJobs";
import { Filter } from "./components/Filter";
import { Feed } from "./components/Feed";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";
import { Navbar } from "./components/Navbar";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />
                                <SearchBar />
                                <div className="flex flex-col space-y-10 md:flex-row  md:space-x-10 md:space-y-0">
                                    <Filter />
                                    <Feed />
                                    <SavedJobs />
                                </div>
                            </>
                        }
                    />

                    <Route path="/login" element={<LoginPage />} />

                    <Route path="/sign-up" element={<SignUpPage />} />

                    <Route
                        path="/product/:productId"
                        element={
                            <>
                                <Navbar />
                                <ProductPage />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
