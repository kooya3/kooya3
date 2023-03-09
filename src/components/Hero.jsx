import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="rleative w-full h-screen mx-auto"> 
    <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
     {/* rendering the purple circle */}
      <div className='flex flex-col justify-center items-center mt-5'>
        {/* created the blob */}
      <div className='w-5 h-5 rounded-full bg-[#C85C8E]' />
      {/* created the line */}
      <div className='w-1 sm:h-80 h-40 violet-gradient' />     
      </div>
{/* created the text field of the hero */}
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#C85C8E]">Elyees Tatua</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
      </div>
      </div>

      <ComputersCanvas />

      {/* creating the bouncing mouse using framer motion */}

     
      <div className='sticky xs:bottom-10 bottom-32 w-full flex justify-center items-center cursor: pointer'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
