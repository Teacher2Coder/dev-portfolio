import { motion } from 'framer-motion'
import { Download, ExternalLink, Calendar, MapPin } from 'lucide-react'

const Resume = () => {
  const skills = {
    'Frontend': ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Bulma', 'Handlebars', 'HTML', 'CSS'],
    'Backend': ['Node.js', 'Express', 'C#', '.NET', 'Python', 'GraphQL', 'REST'],
    'Database': ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
    'Tools & Others': ['Git', 'Docker', 'AWS', 'Azure', 'Render', 'Jest', 'Netlify']
  }

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Silencer Shop',
      location: 'Austin, TX',
      period: '2025 - Present',
      description: "Software engineer responsible for maintaining and scaling legacy applications under a highly regulated industry as customer demand constantly increases. Collaborated with Sales, Compliance and Marketing teams to improve business facing applications as well as e-commerce web applications. Employed Agile-Web development strategies in tandem with senior engineers within their implemented CI/CD pipelines.",
      achievements: [
        "Updated core business platform to improve customer service processing time by 15%",
        "Improved internal audit platform by adding feature sets to federal compliance report generators",
        "Leveraged domain knowledge to ensure enterprise order management system complies with strict federal regulations",
        "Technologies used: C#, JavaScript, TypeScript, .NET Core 8 Framework, WinForms, React Native, Entity Framework",
        "Integrated ERP system with third party platform for skew level synchronization with internal order management system"
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Hybrid',
      period: '2024 - Present',
      description: "Software developer responsible for designing, building, and configuring applications to meet business requirements and platform design specifications. Strong experience in Object Oriented Design principles, applying software design patterns, working with stakeholders and end users to build solutions for Non-profit and For-Profit Organizations. Developed Proof-of-Concept projects to validate new architectures and solutions for planning and refactoring existing code base.",
      achievements: [
        "Leveraging cloud technologies (AWS and Azure)",
        "Utilization of GitHub Actions for CI/CD and automation workflows",
        "Designing, developing, and maintaining new software products for robustness and scalability",
        "Development of innovative and efficient application solutions in order to meet client requirements",
        "Staying current with the latest industry trends and technologies to drive innovation and business value"
      ]
    },
    {
      title: 'Secondary Instructor',
      company: 'Austin ISD / Hays CISD',
      location: 'Austin, TX / Kyle, TX',
      period: '2022 - 2024',
      description: "Responsibilities included instructing Advanced Placement and Academic Social Studies courses, creating and monitoring course credit recovery activities, and actively collaborating in Professional Learning Committee activities. Coaching responsibilities included coaching wide receivers, analyzing team statistics, managing video databases and team application utilization metrics. Produced team highlights weekly and individual highlights periodically for athletes.",
      achievements: [
        "Utilization of AI tools in curriculum management and creation",
        "Designing and implementing Strength and Conditioning programs",
        "Monitoring student success data for analysis in broader team settings",
        "Uploading, sharing, and distributing video footage amongst various teams",
        "Communicating relevant student needs, behavioural issues and successes to their families",
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Exercise Physiology',
      school: 'University of Mary Hardin-Baylor',
      location: 'Belton, TX',
      period: '2017 - 2020',
      details: 'Minor in History'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      school: 'University of Texas at Austin: Center for Professional Education',
      location: 'Online',
      period: '2024',
      details: 'Intensive 24-week program covering modern web development technologies'
    }
  ]

  const certifications = [
    'AZ-900: Microsoft Azure Fundamentals',
    'CLF-C02: AWS Certified Cloud Practitioner',
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
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional experience, skills, and achievements
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ethan-owens-resume.pdf"
              download
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
            <a
              href="/contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Professional Summary
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Result Oriented, Full-Stack Software Developer with a track record of leading teams during quick turnaround projects with a collaborative approach and focus on quality. 
            Self-starter with a strong emphasis on leveraging front end and back end technologies to deliver measurable business results while navigating through constant changes in the application development lifecycle. 
            High energy, driven individual with a ‘roll-up-your-sleeves’ approach to delivering high quality, responsive, and scalable full-stack applications. 
            Proven competency in Agile Development Methodology Framework with solid business understanding and a unique ability for finding creative solutions when options are limited.
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {job.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
              <span className="gradient-text">Education</span>
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {edu.school}
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
              <span className="gradient-text">Certifications</span>
            </h2>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                    <span className="text-gray-900 dark:text-gray-100 font-medium">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-gradient-to-r from-primary-600 to-accent-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-bold mb-4">
                Let's Work Together
              </h3>
              <p className="mb-4 opacity-90">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <a
                href="/contact"
                className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume 