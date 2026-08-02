import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import SignIn from './src/pages/SignIn';
import User from './src/pages/User';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/profile" element={<User />} />
                <Route path="*" element={<div>Erreur 404 - Page introuvable</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;