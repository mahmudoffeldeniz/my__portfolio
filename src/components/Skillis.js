import React from 'react';
// intersection
// motion
import {motion} from "framer-motion";
// variant
const SkillBar = ({ skill, percentage, bgColor, smBgColor }) => {
    return (
        <div className="container mt-10 lg:mt-0 w-full sm:w-1/2 md:w-1/3 p-4">
            <h1 className="text-white text-center">{skill}</h1>
            <div className="mt-2 h-4 relative rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div className={`h-full ${bgColor} ${smBgColor} absolute`} style={{ width: percentage }}>
                    <div className="text-xs text-white flex justify-center items-center h-full">{percentage}</div>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <motion.div
            className="container mt-40 mx-auto text-center items-center" id='scills'>
            <h1 className="h2 text-accent   py-4" >My Skills</h1>
            <div className="flex flex-wrap">
                <SkillBar skill="Html" percentage="80%" bgColor="bg-yellow-400" smBgColor="sm:bg-green-500" />
                <SkillBar skill="CSS/SCSS/SASS" percentage="70%" bgColor="bg-red-500" smBgColor="sm:bg-yellow-400" />
                <SkillBar skill="JavaScript" percentage="60%" bgColor="bg-green-500" smBgColor="sm:bg-red-500" />
                <SkillBar skill="React/Redux" percentage="55%" bgColor="bg-gray-600" smBgColor="sm:bg-indigo-500" />
                <SkillBar skill="Next.js/TyScript" percentage="30%" bgColor="bg-indigo-500" smBgColor="sm:bg-gray-600" />
                <SkillBar skill="Git/Github" percentage="50%" bgColor="bg-blue-500" smBgColor="sm:bg-purple-500" />
            </div>
        </motion.div>
    );
};

export default Skills;
