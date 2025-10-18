import Homepage from "./pages/home/home";
import Aboutpage from "./pages/about/about";
import { Routes, Route } from 'react-router-dom';
import Skillspage from "./pages/skills/skills";
import "./App.less";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about" element={<Aboutpage />} />
			<Route path="/skills" element={<Skillspage />} />
		</Routes>
	);
}

export default App;
