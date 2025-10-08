import { useState } from "react";
import './index.css'
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayement] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handlePaymentChange = (event) => {
        setPayement(event.target.value)
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    return(
        <div className="card">
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" min ='0' value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
                      placeholder="Enter Delivery Instructions">

                      </textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select a Payment Method</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Cash">Cash</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
                       checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label><br />
            <label>
                <input type="radio" value="Delivery"
                       checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}
export default MyComponent;