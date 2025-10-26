import { Routes, Route } from 'react-router-dom';
import Homepage from "./pages/home/home";
import Aboutpage from "./pages/about/about";
import Skillspage from "./pages/skills/skills";
import Mapopage from "./pages/mapo/mapo";
import Theorypage from "./pages/theory/theory";
import Readingrealmpage from "./pages/readingrealm/readingrealm";
import "./App.less";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about" element={<Aboutpage />} />
			<Route path="/skills" element={<Skillspage />} />
			<Route path="/projects/mapo" element={<Mapopage />} />
			<Route path="/projects/theory" element={<Theorypage />} />
			<Route path="/projects/readingrealm" element={<Readingrealmpage />} />
		</Routes>
	);
}

export default App;
