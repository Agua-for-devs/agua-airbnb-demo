import React from 'react';
import { Routes, Route } from 'react-router';
import Home from '../pages/home/home';import Stay1 from '../pages/stay1/stay1';

function RoutingApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
<Route path="/Home" element={<Home />} />
<Route path="/Stay1" element={<Stay1 />} />

        </Routes>
    );

}

export default RoutingApp;