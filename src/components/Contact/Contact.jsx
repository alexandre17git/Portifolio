import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import { useState } from 'react';

function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2aqzp77', 'template_13dupgn', form.current, 'EOyKBzV-0u1MkCznD')
        .then((result) => {
            console.log('Email enviado', result.text);
            setDone(true);
            form.user_name='';
            form.user_email='';
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
       <div className="contact-form" id="Contact">
         <div className="w-left">
                <span>Email-me</span>
                <span>Fazer Contato</span>
                 <div
                 className="blur c-blur2"
                   style={{ background: "#B0E0E6"}}>
                 </div> 
         </div>
         <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user"  placeholder='Name' />
                <input type="email" name="user_email" className="user"  placeholder='Email' />
                <textarea name="message" className="user"  placeholder='Message' />
                <input type="submit" value="Send" className="button"  />
                <span>{done && 'Obrigado por Escrever-me'}</span>
                <div
                className="blur c-blur1"
                style={{ background: '#D8BFD8'}}>
                </div>
            </form>
         </div>
       </div>
  )
}

export default Contact
