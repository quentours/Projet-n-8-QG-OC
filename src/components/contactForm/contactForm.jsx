import React from 'react'
import { useForm } from 'react-hook-form'
import './contactForm.scss'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { firstName, lastName, email, subject, message } = data
    const mailtoLink = `mailto:quentin.guihard@outlook.fr?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}%0A%0A${encodeURIComponent(
      `${firstName}\n ${lastName}`
    )}`
    window.location.href = mailtoLink
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
          <label htmlFor="lastName">Nom</label>
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
        <label htmlFor="subject">Sujet</label>
        <input id="subject" {...register('subject', { required: true })} />
        {errors.subject && <span>This field is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" {...register('message', { required: true })} />
        {errors.message && <span>This field is required</span>}
      </div>
      <button type="submit">Envoyer</button>
    </form>
  )
}

export default ContactForm
