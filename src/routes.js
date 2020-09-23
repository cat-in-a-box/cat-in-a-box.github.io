import Home from './components/home/Home.jsx';
import Calculator from './components/calculator/Calculator.jsx';
import Gallery from './components/gallery/gallery.jsx';
import Snake from './components/snake/Snake.jsx';
import Mousewheelchecker from './components/mousewheel-checker/mousewheel-checker.jsx';


const routes = [
    { path: "/calculator", component: Calculator },
    { path: "/gallery", component: Gallery  },
    { path: "/snake", component: Snake },
    { path: "/mousewheel-checker", component: Mousewheelchecker },
    { path: "/", component: Home },
];

export default routes;
