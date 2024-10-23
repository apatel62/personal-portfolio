//imports React object and useEffect hook from react library
import React, { useEffect } from 'react';

//imports the functions from contact.js
import { inputChecks, emailCheck, noSubmit} from '../utils/contact.js';

export default function Contact() {
    //the followings runs once the contact page loads
    useEffect(()=>{
        const inputs = document.querySelectorAll('#contact-me input, #contact-me textarea');  //grabs the form's input and textarea tags
        const emailInput = document.getElementById('email'); //grabs the email id input id
        const emailError = document.getElementById('email-valid-error'); //grabs the email invalid notification
        const form = document.getElementById('contact-me'); //grabs the email invalid notification

        //calls functions from contact.js with respective parameters
        inputChecks(inputs);
        emailCheck(emailInput, emailError);
        noSubmit(form);
    }, []); 
    return (
        <div>
            <section className="hero-banner">
            </section>
            <main>
                <section className="page-wrapper">
                    {/* Contact me section that is a form with fields for name, email, and a message */}
                    <div className="page-section">
                        <h2 id="me">Contact Me</h2>
                        <div>
                            <form id="contact-me">
                                <label htmlFor="name">Name</label>
                                <input id="name" type="text" name="name" />
                                <label htmlFor="email">Email</label>
                                <input id="email" type="text" name="email" />
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" cols="50"></textarea>
                                {/* error tags if no name, email, and message entered in respective fields and if a valid email is not entered in email field */}
                                <p className="error" id="name-error">Name is required!</p>
                                <p className="error" id="email-error">Email is required!</p>
                                <p className="error" id="email-valid-error">Please enter a valid email!</p>
                                <p className="error" id="message-error">Message is required!</p>
                                <input type="submit" value="Submit" id='submit-button' /> 
                            </form>
                        </div>
                    </div>
                </section>
                {/* footer section with icons to my GitHub, Linkedin, and Instagram profiles */}
                <footer>
                    <a href="https://github.com/apatel62" target="_blank" title="GitHub Profile">
                        <i className="fab fa-github fa-2x" style ={{ color: 'rgba(146, 204, 206, 1)' }}></i>  
                    </a>
                    <a href="https://www.linkedin.com/in/arjun-patel-899952252" target="_blank" title="LinkedIn Profile" className="icon2">
                        <i className="fab fa-linkedin fa-2x" style = {{ color: 'rgba(146, 204, 206, 1)' }}></i>
                    </a>
                    <a href="https://www.instagram.com/arjun_patel1219" target="_blank" title="Instagram Profile" className="icon2">
                        <i className="fab fa-instagram fa-2x" style = {{ color: 'rgba(146, 204, 206, 1)' }}></i>
                    </a>
                </footer>
            </main>
        </div>
    );

}