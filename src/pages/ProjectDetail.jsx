import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Code, Tag, CheckCircle, Clock } from 'lucide-react'
import projectsData from '../data/projects.json'
import handleSmoothScroll from '../utils/handleSmoothScroll'

const ProjectDetail = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const foundProject = projectsData.find(p => p.name === name)
    if (foundProject) {
      setProject(foundProject)

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', foundProject.description);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', foundProject.title);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', foundProject.description);
      }

      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', foundProject.title);
      }

      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', foundProject.description);
      }

    } else {
      navigate('/portfolio')
    }
  }, [name, navigate])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

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
      <div className="max-w-4xl mx-auto container-padding">
        {/* Back Button */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-300"
            onClick={() => handleSmoothScroll()}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' 
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                }`}>
                  {project.status === 'Completed' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                  {project.status}
                </span>
                <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                  <Tag className="w-4 h-4" />
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="aspect-video bg-gradient-to-br from-primary-400 to-accent-400 rounded-xl overflow-hidden shadow-xl">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Code className="w-24 h-24 text-white/50" />
              </div>
            )}
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Detailed Description
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Technologies */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Technologies Used
              </h3>
              <div className="space-y-2">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Project Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">Source Code</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">View on GitHub</div>
                  </div>
                </a>
                
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">Live Demo</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Try it out</div>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Related Projects */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Related Projects
              </h3>
              <div className="space-y-3">
                {projectsData
                  .filter(p => p.name !== project.name && p.category === project.category)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link
                      key={relatedProject.name}
                      to={`/project/${relatedProject.name}`}
                      className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                      onClick={() => handleSmoothScroll()}
                    >
                      <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                        {relatedProject.title}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {relatedProject.category}
                      </div>
                    </Link>
                  ))}
                {projectsData.filter(p => p.name !== project.name && p.category === project.category).length === 0 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    No related projects found.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation to other projects */}
        <motion.div variants={itemVariants} className="mt-12 flex justify-between items-center">
          <Link
            to="/portfolio"
            className="btn-secondary inline-flex items-center gap-2"
            onClick={() => handleSmoothScroll()}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
            onClick={() => handleSmoothScroll()}
          >
            Interested? Let's Talk
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail 