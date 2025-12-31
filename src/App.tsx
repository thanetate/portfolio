import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/home/home";
import Aboutpage from "./pages/about/about";
import Skillspage from "./pages/skills/skills";
import Projectpage from './pages/project/project';
import "./App.less";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about" element={<Aboutpage />} />
			<Route path="/skills" element={<Skillspage />} />
			<Route path="/projects/:projectname" element={<Projectpage />} />
		</Routes>
	);
}

export default App;
