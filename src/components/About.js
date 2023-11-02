import React from 'react';
// countup
import CountUp from "react-countup";
// intersection
import {useInView} from "react-intersection-observer";
// motion
import {motion} from "framer-motion";
// variant
import {fadeIn} from "../variants";
import IMG from '../assets/img/DSC.webp'
import {Link} from "react-scroll";

const About = () => {
  const [ref, inView]=useInView({
    threshold:0.5,
  })
  return <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
           {/*  img */}
        <motion.div
            className='flex-1 mt-5 pt-5 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'><img src={IMG} className='mt-10 w-full lg:absolute left-12 lg:w-[700px]' alt="img"/></motion.div>
        {/*  text */}
        <div>
          <motion.h2
              variants={fadeIn('left',0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.6}}
              className='h2 text-accent'>About Me</motion.h2>
        <motion.h3
            variants={fadeIn('left',0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='h3 mb-4' >I'm a Front end Developer </motion.h3>
          <motion.p
              variants={fadeIn('left',0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='mb-6'>Hello, I am Eldeniz Mahmudov, I am 22 years old
            I am a Front-end developer <br/>
            I can create your site. <br/>
            You can definitely trust  me and entrust me with your work <br/>
            I have worked on more than  100 projects <br/> in this field and written more than 10,000 lines of code.</motion.p>
        {/* stats */}
          <motion.div
              variants={fadeIn('up',0.9)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='lg:flex hidden gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                  <CountUp start={0} end={2} duration={2}/> : null}  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Years of <br/>work</div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                      <CountUp start={0} end={100} duration={5}/> : null} +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Projects</div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                      <CountUp start={0} end={10} duration={7}/> : null}M  +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Lines of <br/>Code</div>
            </div>
          </motion.div>
    <motion.div
        variants={fadeIn('up',0.9)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='flex gap-x-8 items-center'>
         <Link to='contact'><button to='contact' className='btn btn-lg'>Contact Me</button></Link>
      <a  className='text-gradient btn-link'>My Portflio</a>
    </motion.div>

        </div>
      </div>
    </div>
  </section>;
};

export default About;
