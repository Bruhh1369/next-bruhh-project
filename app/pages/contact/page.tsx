'use client'

import { GreenButton } from "../../assets/templates/ore-ui/buttons/ore-ui-button"
import "./contact.css"
import React from 'react'

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-card">
                <div className="contact-card-header">
                    Contact
                </div>
                <div className="contact-card-content">
                    <form
                        action="https://formsubmit.co/bruhh136969@gmail.com"
                        method="POST"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_autoresponse" value="Submitted!" />

                        <div className="input-wrapper">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                onInput={e => {
                                    const target = e.target as HTMLTextAreaElement;
                                    target.style.height = "auto";
                                    target.style.height = target.scrollHeight + "px";
                                }}
                            ></textarea>
                        </div>
                        <div className="input-wrapper">
                            <GreenButton
                                tagName="button"
                                buttonType="submit"
                                childElement={<p>Submit</p>}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="social-card">
                <div className="social-card-header">
                    <p>Socials</p>
                </div>
                <div className="social-card-content">
                    ere
                </div>
            </div>
        </div>
    )
}

export default Contact