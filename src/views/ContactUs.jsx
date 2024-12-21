import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">


            <h2>Contact us</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
            </p>

            <form>
                <div className="form-field">
                    <label>Name</label>
                    <input type="text" />
                </div>

                <div className="form-field">
                    <label>Phone</label>
                    <input type="text" />
                </div>

                <div className="form-field">
                    <label>Email</label>
                    <input type="text" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;