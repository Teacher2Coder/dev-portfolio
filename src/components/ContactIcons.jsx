import { Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const ContactIcons = ({ 
  className = "flex space-x-4", 
  iconSize = "w-5 h-5",
  showLabels = false,
  animationDelay = 0.1 
}) => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Teacher2Coder',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ethan-owens-717b16199',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/Coach_E83',
      label: 'Twitter'
    }
  ]
  
  return (
    <div className={className}>
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-accent-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * animationDelay }}
          >
            <Icon className={iconSize} />
            {showLabels && (
              <span className="ml-2 text-sm">{link.label}</span>
            )}
            <span className="sr-only">{link.label}</span>
          </motion.a>
        )
      })}
    </div>
  )
}

export default ContactIcons