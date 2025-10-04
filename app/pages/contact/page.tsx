'use client'

import { GreenButton } from "../../assets/templates/ore-ui/buttons/ore-ui-button"
import "./contact.css"
import React, { useRef, useState } from "react"

const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const onFormSubmitted = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        try {
            const res = await fetch("../../api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            if (!res.ok) throw new Error("Failed to send email");
            alert("✅ Pesan berhasil dikirim!");
            form.reset();
            const textarea = form.querySelector<HTMLTextAreaElement>("#message");
            if (textarea) textarea.style.height = "70px";
        } catch (error) {
            alert("❌ Gagal mengirim pesan");
            console.error(error);
        }
    };

    const [submitDelayed, setSubmitDelayed] = useState<boolean>(false)

    function handleSubmit(): void {
        setTimeout(() => {
            setSubmitDelayed(true)
            setTimeout(() => {
                setSubmitDelayed(false)
            }, 3000)
        }, 100);
    }

    return (
        <div className="contact-page">
            <div className="contact-card">
                <div className="contact-card-header">
                    Contact
                </div>
                <div className="contact-card-content">
                    <form
                        ref={formRef}
                        onSubmit={onFormSubmitted}
                    >
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
                                    target.style.height = 'auto';
                                    target.style.height = target.scrollHeight + "px";
                                }}
                            ></textarea>
                        </div>
                        <div className="input-wrapper">
                            {submitDelayed ? <div></div> : <GreenButton
                                tagName="button"
                                buttonType="submit"
                                childElement={<p>Submit</p>}
                                onClick={handleSubmit}
                            />}
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