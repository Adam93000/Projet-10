import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import SignIn from './src/pages/SignIn';
import User from './src/pages/User';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<div>Erreur 404 - Page introuvable</div>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;