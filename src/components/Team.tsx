import { motion } from 'framer-motion';
import React from 'react';

const teamMembers = [
  {
    name: "Alexandre Dubois",
    role: "Frontend Specialist",
    description: "Expert in React and modern JavaScript frameworks with 5+ years of experience",
    skills: ["React", "TypeScript", "Next.js", "UI/UX"]
  },
  {
    name: "Sophie Martin",
    role: "Backend Developer",
    description: "Specialized in scalable server architecture and database design",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS"]
  },
  {
    name: "Thomas Leroy",
    role: "Mobile Developer",
    description: "Cross-platform mobile development expert focusing on Flutter and React Native",
    skills: ["Flutter", "React Native", "iOS", "Android"]
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Collaboration Network</h2>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I frequently collaborate with these talented professionals to deliver comprehensive solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-sky-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-sky-600 font-medium">{member.role}</p>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {member.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-sky-50 text-sky-600 text-sm rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
