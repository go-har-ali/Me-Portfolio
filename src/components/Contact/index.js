import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

    const sendEmail = (e) => {
        e.preventDefault(); 
        
        emailjs
            .sendForm(
                'gmail',
                'kwgBgZmpUuYHP93_U',
                refForm.current,
                'kwgBgZmpUuYHP93_U'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send, Please try again later!')
                }
            )
    }   

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am always looking for new opportunities to learn and grow. 
                        If you have a project you would like to discuss, or just want to say hi, feel free to reach out to me.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name="message" id="message" placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Gohar Ali,
                    <br />
                    Lahore, Pakistan
                    <br />
                    Born in 14th August 2000 
                    <br />
                    Dera Ismail Khan, Pakistan
                    <br />
                    <span>goharaliii.6162@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>Gohar Ali here, come over for a cup of tea!!! </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;