import { useState } from 'react';

export function LetsWorkTogether() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // You can add your form submission logic here
        console.log('Form data submitted:', formData);
    };

    const copy = "Reach out to Olivia Nolan for a tailored approach to elevate your brand, events, or social causes with her expertise in marketing, communication, party entertainment, and impactful humanitarian collaboration."

    return (
        <div className="lets-work-together">
            <div className="form-section">
                <div className="left">
                    <h2 className="sub-heading">Let's Work Together</h2>
                    <p className="text">{copy}</p>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className="email"
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            className="type-your-message-here"
                            name="message"
                            placeholder="Type your message here"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button className="submit" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}