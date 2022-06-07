import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MarveelScreen from '../marvel/MarvelScreen';
import { Navbar } from '../ui/Navbar';

const AppRouter = function () {
	return (
		<BrowserRouter>
			<Navbar />
			<h1>Welcome to React Router!</h1>
			<Routes>
				<Route path="/" element={<MarveelScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
