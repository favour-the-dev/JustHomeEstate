import header1 from '../../../assets/imgs/newsheaders/header-1.svg';
import header2 from '../../../assets/imgs/newsheaders/header-2.svg';
import header3 from '../../../assets/imgs/newsheaders/header-3.svg';
import header4 from '../../../assets/imgs/newsheaders/header-4.svg';
import { FaLongArrowAltRight } from "react-icons/fa";
import {motion} from 'framer-motion';
function News() {
    return ( 
        <>
            <div className="p-8 flex flex-col items-center justify-center bg-[#F9F9F9]">
                {/* E9E9E9 */}
                <div className="flex flex-col gap-4">
                    <motion.div 
                    initial={{opacity: 0, y: -40}} 
                    whileInView={{opacity: 1, y: 0}} 
                    transition={{duration: 0.45}} 
                    className="flex flex-col gap-2 items-center justify-center">
                        <h2 className='text-3xl font-bold'>Recent Articles & News</h2>
                        <p className='text-sm capitalize text-center'>check out the latest news and articles about real estate.</p>
                    </motion.div>
                    <div className='flex flex-col gap-6 md:flex-row flex-wrap items-center md:justify-around lg:justify-between'>
                        <motion.div 
                        initial={{opacity: 0, x: -25}} 
                        whileInView={{opacity: 1, x: 0}} 
                        transition={{duration: 0.25}} 
                        whileHover={{scale: 1.05,
                        transition: { duration: 0.25 },}} 
                        className='flex flex-col items-center justify-center bg-white rounded-lg gap-2 w-[90%] md:max-w-[250px] pb-3 cursor-pointer'>
                            <img src={header1} alt="" className='rounded-lg w-full'/>            
                            <div className='text-[#3D3E3F] flex items-center gap-1'>
                                <span>Apartment</span>.<span> March 19, 2024</span>
                            </div>
                            <p className='text-center font-semibold'>Housing Markets That Changed
                            the Most This Week</p>
                            <span className='flex items-center font-bold gap-1'>Read More <FaLongArrowAltRight /></span>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: -30}} 
                        whileInView={{opacity: 1, x: 0}} 
                        transition={{duration: 0.35}} 
                        whileHover={{scale: 1.05,
                        transition: { duration: 0.25 },}} 
                        className='flex flex-col items-center justify-center bg-white rounded-lg gap-2 w-[90%] md:max-w-[250px] pb-3 cursor-pointer'>
                            <img src={header2} alt="" className='rounded-lg w-full'/>
                            <div className='text-[#3D3E3F] flex items-center gap-1'>
                                <span>Apartment</span>.<span> March 19, 2024</span>
                            </div>
                            <p className='text-center font-semibold'>Read Unveils the Best Canadian
                            Cities for Biking</p>
                            <span className='flex items-center font-bold gap-1'>Read More <FaLongArrowAltRight /></span>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: -35}} 
                        whileInView={{opacity: 1, x: 0}} 
                        transition={{duration: 0.45}} 
                        whileHover={{scale: 1.05,
                        transition: { duration: 0.25 },}} 
                        className='flex flex-col items-center justify-center bg-white rounded-lg gap-2 w-[90%] md:max-w-[250px] pb-3 cursor-pointer'>
                            <img src={header3} alt="" className='rounded-lg w-full'/>
                            <div className='text-[#3D3E3F] flex items-center gap-1'>
                                <span>Office</span>.<span> March 19, 2024</span>
                            </div>
                            <p className='text-center font-semibold'>10 Walkable Cities Where You Can
                            Live Affordably</p>
                            <span className='flex items-center font-bold gap-1'>Read More <FaLongArrowAltRight /></span>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: -40}} 
                        whileInView={{opacity: 1, x: 0}} 
                        transition={{duration: 0.55}}
                        whileHover={{scale: 1.05,
                        transition: { duration: 0.25 },}} 
                        className='flex flex-col items-center justify-center bg-white rounded-lg gap-2 w-[90%] md:max-w-[250px] pb-3 cursor-pointer'>
                            <img src={header4} alt="" className='rounded-lg w-full'/>
                            <div className='text-[#3D3E3F] flex items-center gap-1'>
                                <span>Shop</span>.<span> March 19, 2024</span>
                            </div>
                            <p className='text-center font-semibold'>New Apartment Nice in the Best
                            Canadian Cities</p>
                            <span className='flex items-center font-bold gap-1'>Read More <FaLongArrowAltRight /></span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;