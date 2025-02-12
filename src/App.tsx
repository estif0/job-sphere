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
            {/* Main Content Area */}
            <div className="container">
                <Routes>
                    {/* Default Route (Main App Content) */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar />
                                <SearchBar />
                                <Filter />
                                <Feed />
                                <SavedJobs />
                            </>
                        }
                    />

                    {/* Login Route */}
                    <Route path="/login" element={<LoginPage />} />

                    {/* Sign Up Route */}
                    <Route path="/sign-up" element={<SignUpPage />} />

                    {/* Product Page */}
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
