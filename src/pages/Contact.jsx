import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const sendEmail = async () => {
    try {
      await axios.post("https://formsubmit.co/ajax/51a24ea3709ac8afaaa76d16a00b4a9d", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await sendEmail();
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
      console.error(error);
    }
    
    setIsSubmitting(false)
    
    // Clear status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Teacher2Coder',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ethan-owens-717b16199',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/Coach_E83',
      color: 'hover:text-blue-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="min-h-screen section-padding"
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or just have a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300"
                  >
                    Thanks for your message! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300"
                  >
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Let's Connect
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 ${link.color}`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  )
                })}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mt-6">
                Follow me for updates on my latest projects and tech insights.
              </p>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">
                Available for Projects
              </h3>
              <p className="mb-4 opacity-90">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss how we can work together!
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact 