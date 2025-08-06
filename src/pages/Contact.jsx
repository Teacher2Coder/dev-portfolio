import { motion } from 'framer-motion'
import ContactIcons from '../components/ContactIcons'
import ContactForm from '../components/ContactForm'
import usePageSEO from '../utils/usePageSEO'

const Contact = () => {
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

  usePageSEO({
    title: "Contact Me - Ethan Owens",
    description: "Get in touch with Ethan Owens, a full-stack developer with a passion for building scalable, user-friendly applications.",
    ogTitle: "Contact Me - Ethan Owens",
    ogDescription: "Get in touch with Ethan Owens, a full-stack developer with a passion for building scalable, user-friendly applications.",
    twitterTitle: "Contact Me - Ethan Owens",
    twitterDescription: "Get in touch with Ethan Owens, a full-stack developer with a passion for building scalable, user-friendly applications.",
  });
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="min-h-screen section-padding"
    >
      <div className="max-w-7xl mx-auto container-padding">
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
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Send Me a Message
              </h2>
              
              <ContactForm />

            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Let's Connect
              </h3>
              
              <ContactIcons 
                className="flex justify-center space-x-6" 
                iconSize="w-6 h-6"
                animationDelay={0.15}
              />
              
              <p className="text-gray-600 dark:text-gray-400 mt-6">
                Follow me for updates on my latest projects and tech insights.
              </p>
            </div>

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