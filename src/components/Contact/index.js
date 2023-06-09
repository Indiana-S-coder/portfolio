import emailjs from '@emailjs/browser'
import './index.scss'
import { useState, useEffect, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef();

    useEffect(() => {
          setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            "service_t74xy3j","template_k6lbodl",
             refForm.current,
             'rGoMYo_Wrq-6V3845IpK4'
        )
        .then(
            () => {
                alert("Message successfully sent!")
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
   }
    return (
        <>
          <div className='container contact-page'>
             <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray = {['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or
                     large projects. However, if you have other request or question,
                     don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder='Name' required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input type="text" placeholder='Subject' name='subject' required />
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' cols="30" rows="10"></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Submit" />
                            </li>
                        </ul>
                    </form>
                </div>
             </div>
          </div>
          <Loader type='pacman' />
        </>
    )
}

export default Contact