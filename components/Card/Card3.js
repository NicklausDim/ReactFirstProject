/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/alt-text */
import './Card.css';

export default function () {

return (
    <div className="card">
        <img 
            src="https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
            alt="Something went wrong! Please try again later."
            title="How's the scene"
        />
        <h3>My Product</h3> 
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, distinctio facilis dolores ullam autem ad commodi.
        </p>
        <h4>Price: $200</h4> 
        <h4>Add to Cart</h4> 
    </div>
);
}

