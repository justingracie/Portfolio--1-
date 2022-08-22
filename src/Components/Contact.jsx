import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import '../Form.css'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0z0ot1h', 'template_22w0o6p', form.current, 'ldtG6P6Oen8IeNB_b')
        .then((result) => {
            console.log(result.text);
    
        }, (error) => {
            console.log(error.text);
        });

    };

    return(
        
        <div className="formContainer">
            <div className="form-box">
                <h5>Contact Me</h5>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form">
                        <label>Name:</label>
                            <input type="text" name="user_name" placeholder="NAME"/>
                        <label>Email:</label>
                            <input type="email" name="user_email" placeholder="EMAIL"/>
                        <label>Message:</label>
                            <textarea name="message" placeholder="MESSAGE"/>
                            <input type="submit" value="Send" className="sendBtn"/>
                    </div>
                </form>
            </div>
        </div>
    );
};   