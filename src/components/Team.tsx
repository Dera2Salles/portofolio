import { motion } from "framer-motion";
import React from "react";

const teamMembers = [
  {
    name: "Alexandre Dubois",
    role: "Frontend Specialist",
    description:
      "Expert in React and modern JavaScript frameworks with 5+ years of experience",
    skills: ["React", "TypeScript", "Next.js", "UI/UX"],
  },
  {
    name: "Sophie Martin",
    role: "Backend Developer",
    description:
      "Specialized in scalable server architecture and database design",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
  },
  {
    name: "Thomas Leroy",
    role: "Mobile Developer",
    description:
      "Cross-platform mobile development expert focusing on Flutter and React Native",
    skills: ["Flutter", "React Native", "iOS", "Android"],
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Collaboration Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            I frequently partner with these specialized professionals to deliver
            comprehensive, end-to-to solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-6 flex flex-col items-center md:items-start">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-gray-500">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">
                  {member.role}
                </p>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed font-light text-center md:text-left flex-grow">
                {member.description}
              </p>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-gray-500 text-sm font-medium bg-white px-3 py-1 rounded-full border border-gray-100"
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
