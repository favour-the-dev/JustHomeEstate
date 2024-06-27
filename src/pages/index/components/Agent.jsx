import { FaLongArrowAltRight } from "react-icons/fa";
import {motion} from 'framer-motion';
function Agent() {
    return ( 
        <>
            <div className="p-12 flex flex-col gap-4 md:flex-row items-center md:justify-around bg-[#FFF8F6]">
                <motion.div 
                initial={{opacity: 0, y: -40}} 
                whileInView={{opacity: 1, y: 0}} 
                transition={{duration: 0.35}}
                className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-3xl font-bold text-center lg:text-start">Become a Real Estate Agent</h3>
                    <p className="text-sm text-center">We only work with the best companies around the globe</p>
                </motion.div>
                <motion.button 
                initial={{opacity: 0, x: 40}} 
                whileInView={{opacity: 1, x: 0}} 
                transition={{duration: 0.45}}
                whileHover={{scale: 1.05,
                transition: { duration: 0.25 },}} 
                className="bg-primary text-black px-4 p-2 text-sm rounded-md flex gap-1 items-center">
                    Register Now<FaLongArrowAltRight />
                </motion.button>
            </div>
        </>
    );
}

export default Agent;