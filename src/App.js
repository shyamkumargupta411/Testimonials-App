import './App.css';
import Testimonials from './Component/Testimonials';
import reviews from './Component/data';

function App() {
    return ( <
        div >
        <
        div className = 'main' >
        <
        h4 > Our Testimonials < /h4> < /
        div > <
        div className = 'mainj' >
        <
        Testimonials reviews = { reviews }
        />  < /
        div > <
        /div>
    );
}

export default App;