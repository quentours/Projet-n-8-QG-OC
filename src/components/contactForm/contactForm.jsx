import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import './contactForm.scss'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const { firstName, lastName, email, subject, message } = data

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      to_name: 'Quentin Guihard',
      email,
      subject,
      message,
    }

    emailjs
      .send(
        'service_t99u3rw', // Replace with your EmailJS service ID
        'template_ur5ivit', // Replace with your EmailJS template ID
        templateParams,
        'JdSitwjGTxFm5KuiJ' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          alert('Message envoyé')
          reset()
        },
        (error) => {
          console.log('FAILED...', error)
          alert("Erreur lors de l'envoi du message. Veuillez réessayer.")
        }
      )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="name-row">
        <div className="form-group">
          <label htmlFor="firstName">Prénom:</label>
          <input
            id="firstName"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom:</label>
          <input id="lastName" {...register('lastName', { required: true })} />
          {errors.lastName && <span>This field is required</span>}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="subject">Sujet:</label>
        <input id="subject" {...register('subject', { required: true })} />
        {errors.subject && <span>This field is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          {...register('message', { required: true })}
          rows="5"
        />
        {errors.message && <span>This field is required</span>}
      </div>
      <button type="submit">Envoyer</button>
    </form>
  )
}

export default ContactForm
