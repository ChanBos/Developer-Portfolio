"use client";

import React, {useState, CSSProperties} from "react";
import {ToastContainer, Slide, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import PuffLoader from "react-spinners/PuffLoader";
import $ from "jquery";

export default function ContactForm() {
    const [active, setActive] = useState(false);
    const [userInput, setUserInput] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: ""
    });

    /**
     * Function to handle setting user input state when form input values change.
     * @param e
     */
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;

        setUserInput({...userInput, [name]: value});
    };

    /**
     * Function to validate the contact form.
     * @param e
     */
    const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }

        form.classList.add("was-validated");

        return form.checkValidity();
    }

    /**
     * Function to send contact form emails.
     */
    const sendContactFormEmail = async () => {
        try {
            const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
            const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
            const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

            const emailParams = {
                first_name: userInput.first_name,
                last_name: userInput.last_name,
                email: userInput.email,
                message: userInput.message
            };

            const res = await emailjs.send(serviceID, templateID, emailParams, userID);

            if (res.status === 200) {
                toast.success("Message sent successfully!");
                setUserInput({
                    first_name: "",
                    last_name: "",
                    email: "",
                    message: ""
                });
            }

            $(".contact-form").removeClass("was-validated");

            setActive(false);
        } catch (error) {
            console.log(error);
            toast.error("Failed to send message. Please try again later.");

            setActive(false);
        }
    }

    /**
     * Function to handle contact form submission.
     * @param e
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setActive(true);

        if (validateForm(e)) {
            await sendContactFormEmail();
        }

        setActive(false);
    };

    const override: CSSProperties = {
        verticalAlign: "middle",
        marginLeft: "5px"
    };

    return (
        <form className="contact-form needs-validation py-3" onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
                <label htmlFor="first_name" className="form-label required">First Name</label>
                <input type="text"
                       className="form-control"
                       name="first_name"
                       id="first_name"
                       placeholder="First Name"
                       value={userInput.first_name}
                       onChange={handleChange}
                       autoComplete="given-name"
                       required
                />
                <div className="invalid-feedback">This is a Required Field</div>
            </div>
            <div className="mb-3">
                <label htmlFor="last_name" className="form-label required">Last Name</label>
                <input type="text"
                       className="form-control"
                       name="last_name"
                       id="last_name"
                       placeholder="Last Name"
                       value={userInput.last_name}
                       onChange={handleChange}
                       autoComplete="family-name"
                       required
                />
                <div className="invalid-feedback">This is a Required Field</div>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label required">Email Address</label>
                <input type="email"
                       className="form-control"
                       name="email"
                       id="email"
                       placeholder="Email Address"
                       value={userInput.email}
                       onChange={handleChange}
                       autoComplete="email"
                       required
                />
                <div className="invalid-feedback">This is a Required Field</div>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label required">Message</label>
                <textarea rows={4}
                          className="form-control"
                          name="message"
                          id="message"
                          placeholder="Message"
                          value={userInput.message}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                >
                </textarea>
                <div className="invalid-feedback">This is a Required Field</div>
            </div>
            <button type="submit" className="btn" title="Submit">
                Submit
                {!active ? "" :
                    <PuffLoader color="rgba(255, 255, 255, 0.9)" size={25} cssOverride={override}/>
                }
            </button>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Slide}
            />
        </form>
    );
}