"use client"

import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: <Users className="stat-icon" />, value: "10K+", label: "Happy Users" },
    { icon: <Target className="stat-icon" />, value: "99%", label: "Success Rate" },
    { icon: <Award className="stat-icon" />, value: "50+", label: "Awards Won" },
    { icon: <Globe className="stat-icon" />, value: "25+", label: "Countries" },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Visionary leader with 15+ years in tech innovation.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Technical expert specializing in scalable architectures.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Creative designer passionate about user experiences.",
    },
  ]

  return (
    <div className="page-container">
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="page-title">About ThemeSwitch</h1>
          <p className="page-subtitle">
            We're on a mission to revolutionize how users interact with digital interfaces through innovative theming
            solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-description">
              At ThemeSwitch, we believe that personalization is key to creating meaningful digital experiences. Our
              platform empowers users to customize their interface according to their preferences, mood, and needs.
            </p>
            <p className="mission-description">
              We're committed to pushing the boundaries of what's possible in theme customization, making it accessible,
              intuitive, and delightful for everyone.
            </p>
          </div>
          <div className="mission-image">
            <img src="/placeholder.svg?height=400&width=600" alt="Our mission" className="mission-img" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-container">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">The passionate individuals behind ThemeSwitch</p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-container">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-image" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
