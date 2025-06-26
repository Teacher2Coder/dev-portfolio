import { motion } from 'framer-motion'
import { Code, Brain, Users } from 'lucide-react'
import SkillsTable from '../components/SkillsTable'
import experience from '../data/experience.json'

const About = () => {
  
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
      className="min-h-screen"
    >
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate full-stack developer with over 2 years of experience 
                  creating digital solutions that make a difference. My journey into 
                  programming started with curiosity and has evolved into a deep love 
                  for building scalable, user-friendly applications.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or mentoring aspiring developers. 
                  I believe in the power of clean code, continuous learning, and 
                  collaborative problem-solving.
                </p>
                
                <p>
                  My goal is to create applications that not only solve real-world 
                  problems but also provide exceptional user experiences. I'm always 
                  excited to take on new challenges and learn emerging technologies.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🧑🏼‍💻</div>
                    <h3 className="text-xl font-semibold">Always Learning</h3>
                    <p className="mt-2 opacity-90">Passionate about technology and innovation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <SkillsTable itemVariants={itemVariants} />

      </div>
    </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A timeline of my professional growth and experiences
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-accent-400"></div>

            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  <div className="ml-20">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
                      <div className="flex items-center mb-2">
                        <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                          {item.period}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {item.title}
                      </h3>
                      
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {item.company}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beyond <span className="gradient-text">Code</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What drives me outside of programming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Always exploring new technologies, attending conferences, and staying up-to-date with industry trends.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Community Building
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mentoring new developers, contributing to open source, and participating in local tech meetups.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Side Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building fun applications, experimenting with new frameworks, and turning ideas into reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About 