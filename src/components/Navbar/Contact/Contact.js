import React from 'react'
import './contact.css';

const Contact = () => {
    return (
        <div className="form-container">
            <h1 className="heading"><span>Economic </span>Pricing</h1>
        <div className="wrapper">
            <div className="company_info">
                <h3>Economic Pricing</h3>
                <ul>
                    <li>SVIT Road, Rajupura Village, Vasad, Anand, ગુજરાત 388306, Gujarat 388306</li>
                    <li>02692 274 766</li>
                    <li>svitvasad.ac.in</li>
                </ul>
            </div>
            <div className="contact">
                <h3>Email us</h3>
                <form >
                    <p>
                        <label>Name</label>
                        <input type="text" name="Name"/>
                    </p>
                    <p>
                        <label>Company</label>
                        <input type="text" name="Company"/>
                    </p>
                    <p>
                        <label>Email address</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label>Phone Number</label>
                        <input type="number" name="phone"/>
                    </p>
                    <p className="full">
                        <label>Message</label>
                        <textarea name="message"  cols="30" rows="10"></textarea>
                    </p>
                    <p className="full">
                        <button>Submit</button>
                    </p>
                    
                    
                </form>

            </div>
        </div>
        </div>
    )
}

export default Contact
