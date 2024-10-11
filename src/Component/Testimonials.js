import Card from './Card';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from 'react';
import './testimonials.css';

const Testimonials = (props) => {
    const reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function lift() {
        if (index === 0) {
            setIndex(reviews.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function right() {
        if (index === reviews.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function surprise() {
        let random = Math.floor(Math.random() * reviews.length);
        setIndex(random);
    }

    return ( < div className = "testimonials-container" >
        <
        Card className = "card"
        review = { reviews[index] }
        />

        <
        div className = "card-arrows" >
        <
        SlArrowLeft onClick = { lift }
        /> <
        SlArrowRight onClick = { right }
        /> <
        /div>

        <
        div >
        <
        button onClick = { surprise } > Surprise < /button> <
        /div> <
        /div>

    );
};

export default Testimonials;