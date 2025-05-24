import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                'service_hqewt8s',         // Your EmailJS service ID
                'template_cjl0p3z',        // Your template ID
                {
                    from_name: form.name,
                    to_name: 'Ashish',
                    from_email: form.email,
                    to_email: 'Ashishableo12@gmail.com',
                    message: form.message,
                },
                'uGTqaO-jB4NYhfDrF'        // Your public EmailJS API key
            );
            setLoading(false);
            alert('Message sent successfully');
            setForm({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error(error);
            alert('Message failed to send');
            setLoading(false);
        }
    };

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img
                    src="/assets/terminal.png"
                    alt="terminal"
                    className="inset-0 absolute min-h-screen"
                />
                <div className="contact-container z-10">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Got a project in mind or just want to say hi? I'm all ears!
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7"
                    >
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Ashish Kumar"
                            />

                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="you@example.com"
                            />

                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Type your message here..."
                            />
                        </label>

                        <button type="submit" className="field-btn">
                            {loading ? 'Sending...' : 'Send'}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
