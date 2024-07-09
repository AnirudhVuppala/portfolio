import * as React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Snackbar, Alert } from '@mui/material';
import './Contact.css';

export default function Contact() {
    const { register, handleSubmit, reset } = useForm();
    const [open, setOpen] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    const [alertSeverity, setAlertSeverity] = React.useState('success');

    const handleClick = (message, severity) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const onSubmit = (data) => {
        axios.post('https://portfolioserver-20vb.onrender.com/api/contact', data).then((response) => {
            handleClick("Form submitted successfully!", "success");
            reset(); // Reset form fields after successful submission
        }).catch((error) => {
            handleClick("Error submitting form!", "error");
        });
    };

    return (
        <section id="contact">
            <div className="ContactDiv">
                <div className="backgroundImg"></div>
                <div style={{ zIndex: "1" }}>
                    <div className="d-flex flex-column align-items-center mb-5">
                        <div className="d-flex flex-column align-items-center">
                            <h1 className="ContactHead">CONTACT</h1>
                            <hr className="Hr" />
                        </div>
                        <div>
                            <p className="ContactParaTag">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="formDiv shadow-lg rounded pt-5 px-4 px-md-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex flex-column mb-4">
                                    <label className="contactLabel py-2" htmlFor="name">Name</label>
                                    <input {...register("name")} className="contactInp" type="text" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="d-flex flex-column mb-4">
                                    <label className="contactLabel py-2" htmlFor="email">Email</label>
                                    <input {...register("email")} className="contactInp" type="email" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="d-flex flex-column">
                                    <label className="contactLabel py-2" htmlFor="message">Message</label>
                                    <textarea {...register("message")} className="contactInp" name="message" id="message" cols="25" rows="10" placeholder="Enter your message"></textarea>
                                </div>
                                <div className="d-flex justify-content-end my-5">
                                    <button className="contactBtn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertSeverity} variant="filled" sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </section>
    );
}