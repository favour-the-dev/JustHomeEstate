import {motion} from 'framer-motion';
import { RiDoubleQuotesL } from "react-icons/ri";
function RatingCard({profileUrl, name, occupation, description}) {
    return ( 
        <>
            <motion.div 
            initial={{opacity: 0, x: -100, scale: 0.5 }} 
            whileInView={{opacity: 1, x: 0, scale: 1}} 
            transition={{duration: 0.5}} 
            className="flex flex-col gap-2">
                <div className='flex justify-between items-start'>
                    <div className='flex gap-3 items-center'>
                        <img src={profileUrl} alt="" className='w-24 h-24 rounded-full'/>
                        <div className='flex gap-1 flex-col'>
                            <span className='font-semibold capitalize'>{name}</span>
                            <span className='font-semibold capitalize'>{occupation}</span>
                        </div>
                    </div>
                    <RiDoubleQuotesL className='text-5xl'/>
                </div>
                <p>{description}</p>
            </motion.div>
        </>
    );
}

export default RatingCard;