import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Title from '../../components/title/Title';
import './Contact.css';
import { FiHome } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Button from './../../components/button/Button';

function Contact() {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);
    const inputVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: .7, duration: 3, type: 'spring', stiffness: 120
            }
        }
    }
    const detailsVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: .7, duration: 3, type: 'spring', stiffness: 120
            }
        }
    }
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleFormData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData(prev => (
            { ...prev, [name]: value }
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const loginRes = await axios.post(api_url + 'user/login', formData);
            // setUserData({
            //     token: loginRes.data.token,
            //     user: loginRes.data.user
            // });
            // localStorage.setItem('pmt-auth-token', loginRes.data.token);
            // history.push('/');
        } catch (error) {
            // if (error.response.data.msg) {
            //     setMessage(error.response.data.msg);
            //     setMessageType('error');
            // }
        }
    };

    return (
        <section className="contact">
            <div className="titleContainer">
                <Title title="Contact" />
            </div>
            <section className="contact__content">
                <motion.form
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={inputVariants}
                    className="contact__form" onSubmit={handleSubmit}>

                    <div className="contact__field">
                        <label htmlFor="email" className="contact__label">Name</label>
                        <input className="contact__input" type="text" placeholder=" " value={formData.email} name="email" onChange={handleFormData} required autoComplete='off' />
                    </div>
                    <div className="contact__field">
                        <label htmlFor="email" className="contact__label">Subject</label>
                        <input className="contact__input" type="text" placeholder=" " value={formData.email} name="email" onChange={handleFormData} required autoComplete='off' />
                    </div>
                    <div className="contact__field">
                        <label htmlFor="email" className="contact__label">Enter Message</label>
                        <textarea name="" id="" cols="30" rows="10" ></textarea>
                    </div>


                    <div className="contact__btnContainer">
                        <Button text='Send Message' />
                    </div>
                </motion.form>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={detailsVariants}
                    className="contact__details">
                    <div>
                        <div className="contact__icon">
                            <FiHome />
                        </div>
                        <div>
                            <p>Tirunelveli, TamilNadu, India</p>
                            <span>11/162, Raviram Nagar, Agasthiarpatti, Ambasamudram</span>
                        </div>
                    </div>
                    <div>
                        <div className="contact__icon">
                            <FiPhoneCall />
                        </div>
                        <div>
                            <p>+91 9489103429</p>
                            <span>Mon - Fri 9 am to 6 pm</span>
                        </div>
                    </div>
                    <div>
                        <div className="contact__icon">
                            <FiMail />
                        </div>
                        <div>
                            <p>aravindark30@gmail.com</p>
                            <span>Send me your query anytime</span>
                        </div>
                    </div>
                </motion.div>
            </section>
        </section>
    )
}

export default Contact;
