import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, ExternalLink, Eye } from 'lucide-react'
import projectsData from '../data/projects.json'
import handleSmoothScroll from '../utils/handleSmoothScroll'
import usePageSEO from '../utils/usePageSEO'

const Home = () => {
  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 3)

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
    title: "Ethan Owens - Software Engineer",
    description: "Welcome to Ethan Owens' portfolio, showcasing his skills and projects as a full-stack developer.",
    ogTitle: "Ethan Owens - Software Engineer",
    ogDescription: "Welcome to Ethan Owens' portfolio, showcasing his skills and projects as a full-stack developer.",
    twitterTitle: "Ethan Owens - Software Engineer",
    twitterDescription: "Welcome to Ethan Owens' portfolio, showcasing his skills and projects as a full-stack developer.",
  });
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto container-padding w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.div
                className="inline-block mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="bg-gradient-to-r from-primary-200 to-primary-300 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  👋🏻 Welcome to my portfolio
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="gradient-text">Ethan Owens</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer passionate about creating{' '}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  dynamic and responsive
                </span>{' '}
                web applications
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
                With expertise in React, Node.js, .NET, and other modern web technologies, 
                I bring ideas to life through clean code and innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/portfolio" className="btn-primary inline-flex items-center gap-2" onClick={() => handleSmoothScroll()}>
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <a 
                  href="/E.Owens_Resume.pdf" 
                  download 
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Download Resume
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden"
            >
              {/* Modern geometric design */}
              <div className="relative max-w-md mx-auto px-4 sm:px-0">
                {/* Main container */}
                <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 shadow-2xl">
                  {/* Grid pattern background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 gap-2 h-full w-full p-4">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`rounded-sm ${
                            i % 3 === 0 ? 'bg-primary-400' : 
                            i % 5 === 0 ? 'bg-accent-400' : 
                            'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Code-like elements */}
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-2 justify-end">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-2 font-mono text-sm max-w-fit mx-auto pl-8">
                      <div className="flex items-center gap-2">
                        <span className="text-primary-600 dark:text-primary-400">while</span>
                        <span className="text-gray-700 dark:text-gray-300">(alive)</span>
                      </div>
                      
                      <div className="text-gray-700 dark:text-gray-300">
                        <span>{'{'}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <span className="text-primary-600 dark:text-primary-400">var</span>
                        <span className="text-gray-700 dark:text-gray-300">skill</span>
                        <span className="text-gray-500">=</span>
                        <span className="text-accent-600 dark:text-accent-400">Learn()</span>
                        <span className="text-gray-500">;</span>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <span className="text-primary-600 dark:text-primary-400">var</span>
                        <span className="text-gray-700 dark:text-gray-300">project</span>
                        <span className="text-gray-500">=</span>
                        <span className="text-accent-600 dark:text-accent-400">Build</span>
                        <span className="text-gray-700 dark:text-gray-300">(skill)</span>
                        <span className="text-gray-500">;</span>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <span className="text-accent-600 dark:text-accent-400">Debug</span>
                        <span className="text-gray-700 dark:text-gray-300">(project)</span>
                        <span className="text-gray-500">;</span>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <span className="text-accent-600 dark:text-accent-400">Deploy</span>
                        <span className="text-gray-700 dark:text-gray-300">(project)</span>
                        <span className="text-gray-500">;</span>
                      </div>
                      
                      <div className="flex items-center gap-2 ml-4">
                        <span className="text-accent-600 dark:text-accent-400">Repeat()</span>
                        <span className="text-gray-500">;</span>
                      </div>
                      
                      <div className="text-gray-700 dark:text-gray-300">
                        <span>{'}'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-primary-400 to-primary-300 rounded-full opacity-40 blur-2xl"></div>
                
                {/* Tech stack indicators */}
                <div className="hidden sm:block absolute top-8 -left-4 lg:-left-8 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JS</span>
                  </div>
                </div>
                
                <div className="hidden sm:block absolute bottom-8 -right-4 lg:-right-8 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-xs">.NET</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my favorite projects that showcase my skills and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-400 relative">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-primary-600 px-2 py-1 rounded text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <Link 
                    to={`/project/${project.name}`}
                    onClick={() => handleSmoothScroll()}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                      {project.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      to={`/project/${project.name}`}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                      onClick={() => handleSmoothScroll()}
                    >
                      <Eye className="w-4 h-4" />
                      Details
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link 
              to="/portfolio"
              className="btn-primary inline-flex items-center gap-2" 
              onClick={() => handleSmoothScroll()}
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              I'm always excited to work on new projects and collaborate with passionate teams
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
              onClick={() => handleSmoothScroll()}
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home 