import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import './Card.css';
const Card = (props) => {
    let review = props.review; // Correct prop name
    return ( <
        div className = "card-container" >
        <
        div className = "card-image" >
        <
        img src = { review.image }
        alt = { review.name }
        /> < /
        div > <
        div className = "card-content" >
        <
        h1 > { review.name } < /h1> <
        h4 > { review.job } < /h4> <
        p > { review.text } < /p> < /
        div > <
        /div>
    );
};
export default Card;