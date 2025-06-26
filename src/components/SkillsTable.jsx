import { Globe, Server, Database, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const Skills = ({ itemVariants }) => {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Bulma', 'Handlebars', 'HTML', 'CSS']
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Node.js', 'Express', 'C#', '.NET', 'Python', 'GraphQL', 'REST']
    },
    {
      category: 'Databases',
      icon: Database,
      technologies: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'CosmosDB']
    },
    {
      category: 'Tools & Others',
      icon: Code,
      technologies: ['Git', 'Docker', 'AWS', 'Azure', 'Render', 'Jest', 'Netlify']
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-3">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {skill.category}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
  )
}

export default Skills;