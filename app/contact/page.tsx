"use client"

import type React from "react"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      title: "Email",
      details: "hello@themeswitch.com",
      subtitle: "Send us an email anytime",
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Office",
      details: "123 Innovation Street",
      subtitle: "San Francisco, CA 94105",
    },
    {
      icon: <Clock className="contact-icon" />,
      title: "Working Hours",
      details: "Mon-Fri: 8am-6pm",
      subtitle: "Weekend: 10am-4pm",
    },
  ]

  return (
    <div className="page-container">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 className="form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-container">
            <h2 className="info-title">Contact Information</h2>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">{info.title}</h3>
                    <p className="contact-info-details">{info.details}</p>
                    <p className="contact-info-subtitle">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
