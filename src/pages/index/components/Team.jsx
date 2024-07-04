import john from '../../../assets/imgs/team/JohnP.svg';
import samuel from '../../../assets/imgs/team/samuel.svg';
import Thea from '../../../assets/imgs/team/Thea.svg';
import Thomas from '../../../assets/imgs/team/Thomas.svg';
import {motion} from 'framer-motion';
function Team() {
    return ( 
        <>
            <div className="px-4 md:px-8 py-12 w-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-4 p-4">
                    <div className="flex flex-col gap-4">
                        <motion.div 
                        initial={{opacity: 0, y: -40}} 
                        whileInView={{opacity: 1, y: 0}} 
                        transition={{duration: 0.45}} 
                        className="flex flex-col gap-2 items-center justify-center">
                            <h2 className="text-2xl md:text-3xl text-center md:text-start font-bold">Meet Our Team Of Experts</h2>
                            <p className="text-sm">These are the people that made it all happen</p>
                        </motion.div>

                        <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between p-4">
                            <motion.div 
                            initial={{opacity: 0, x: -25}} 
                            whileInView={{opacity: 1, x: 0}} 
                            transition={{duration: 0.15}} 
                            className='flex flex-col gap-1'>
                                <img src={john} alt="" />
                                <span className='font-semibold'>John Powell</span>
                                <span className='font-semibold'>CEO</span>
                            </motion.div>
                            <motion.div 
                            initial={{opacity: 0, x: -30}} 
                            whileInView={{opacity: 1, x: 0}} 
                            transition={{duration: 0.25}} 
                            className='flex flex-col gap-1'>
                                <img src={Thomas} alt="" />
                                <span className='font-semibold'>Thomas Smith</span>
                                <span className='font-semibold'>CTO</span>
                            </motion.div>
                            <motion.div 
                            initial={{opacity: 0, x: -35}} 
                            whileInView={{opacity: 1, x: 0}} 
                            transition={{duration: 0.35}} 
                            className='flex flex-col gap-1'>
                                <img src={Thea} alt="" />
                                <span className='font-semibold'>Theadora Smith</span>
                                <span className='font-semibold'>COO</span>
                            </motion.div>
                            <motion.div 
                            initial={{opacity: 0, x: -40}} 
                            whileInView={{opacity: 1, x: 0}} 
                            transition={{duration: 0.45}} 
                            className='flex flex-col gap-1'>
                                <img src={samuel} alt="" />
                                <span className='font-semibold'>Samuel Palmer</span>
                                <span className='font-semibold'>Marketing</span>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <motion.div 
                        initial={{opacity: 0, y: -40}} 
                        whileInView={{opacity: 1, y: 0}} 
                        transition={{duration: 0.45}} 
                        className="flex flex-col gap-2 items-center justify-center">
                            <h2 className="text-2xl md:text-3xl text-center md:text-start font-bold">Popular Real Estate Markets</h2>
                            <p className="text-sm">See our most popular real estate markets</p>
                        </motion.div>

                        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
                            <motion.span 
                            initial={{opacity: 0, y: 25}} 
                            whileInView={{opacity: 1, y: 0}} 
                            transition={{duration: 0.15}} 
                            className='alternate-btn'>The Villages, FL real estate</motion.span>
                            <motion.span 
                            initial={{opacity: 0, y: 35}} 
                            whileInView={{opacity: 1, y: 0}} 
                            transition={{duration: 0.25}}
                            className='alternate-btn'>New York, Real estate</motion.span>
                            <motion.span 
                            initial={{opacity: 0, y: 45}} 
                            whileInView={{opacity: 1, y: 0}} 
                            transition={{duration: 0.35}}
                            className='alternate-btn'>Madera, CA real estate</motion.span>
                            <motion.span 
                            initial={{opacity: 0, y: 45}} 
                            whileInView={{opacity: 1, y: 0}} 
                            transition={{duration: 0.45}}
                            className='alternate-btn'>Fontana, CA real estate</motion.span>
                            <motion.span 
                            initial={{opacity: 0, y: 55}} 
                            whileInView={{opacity: 1, y: 0}} 
                            transition={{duration: 0.55}}
                            className='alternate-btn'>Moreno Valley, CA real estate</motion.span>
                            <motion.span 
                            initial={{opacity: 0, y: 65}} 
                            whileInView={{opacity: 1, y: 0}} 
                            transition={{duration: 0.65}}
                            className='alternate-btn'>Aurora, IL real estate</motion.span>
                            <motion.span 
                            initial={{opacity: 0, y: 75}} 
                            whileInView={{opacity: 1, y: 0}} 
                            transition={{duration: 0.75}}
                            className='alternate-btn'>Perris, CA real estate</motion.span>
                            <motion.span 
                            initial={{opacity: 0, y: 85}} 
                            whileInView={{opacity: 1, y: 0}} 
                            transition={{duration: 0.85}}
                            className='alternate-btn'>Minnesota Lake, MN real estate</motion.span>
                            <motion.span 
                            initial={{opacity: 0, y: 95}} 
                            whileInView={{opacity: 1, y: 0}} 
                            transition={{duration: 0.95}}
                            className='alternate-btn'>Woodbridge, VA real estate</motion.span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;