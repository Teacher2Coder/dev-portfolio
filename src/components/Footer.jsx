import { Heart } from 'lucide-react'
import ContactIcons from './ContactIcons'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-accent-900 border-t border-gray-200 dark:border-accent-700">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold gradient-text mb-4">
              Ethan Owens
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Passionate full-stack developer creating innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                About Me
              </a>
              <a href="/portfolio" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                Portfolio
              </a>
              <a href="/contact" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                Contact
              </a>
              <a href="/resume" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                Resume
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Connect With Me
            </h4>
            <ContactIcons className="flex justify-center md:justify-end space-x-4" />         
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-accent-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ethan Owens. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 