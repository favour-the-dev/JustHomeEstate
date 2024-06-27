import img1 from '../../../assets/imgs/cities/newYork.jpeg';
import img2 from '../../../assets/imgs/cities/chicago.jpeg';
import img3 from '../../../assets/imgs/cities/losAngles.jpg';
import img4 from '../../../assets/imgs/cities/sanfransico.jpeg';
import img5 from '../../../assets/imgs/cities/florida.jpeg';
import img6 from '../../../assets/imgs/cities/miami.jpg';
import {motion} from 'framer-motion';
function City() {  
    return ( 
        <>
            <div className="w-full flex flex-col justify-center items-center p-6 mt-4 overflow-hidden">
                <div className="flex flex-col gap-4">
                    <motion.div className="text-center">
                        <h2 className="font-bold text-3xl">Find Properties in These Cities</h2>
                        <p className="text-sm">See the top assets from these locations</p>
                    </motion.div>
                    <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 md:w-[90%] mx-auto">
                        <motion.div 
                        initial={{opacity: 0, x: -50, scale: 0.75}} 
                        whileInView={{opacity: 1, x:0, scale: 1}} 
                        transition={{duration: 0.25}}
                        whileHover={{scale: 1.01,
                        transition: { duration: 0.25 },}} 
                        className='displayCard relative h-[200px] lg:h-[300px] md:col-span-2 w-full text-white bg-black rounded-md cursor-pointer'>
                            <img src={img1} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>NewYork</span>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, y: -50, scale:0.75}} 
                        whileInView={{opacity: 1, y:0, scale: 1}} 
                        transition={{duration: 0.3}}  
                        whileHover={{scale: 1.01,
                        transition: { duration: 0.25 },}} 
                        className='displayCard h-[200px] lg:h-[300px] relative text-white bg-black rounded-md'>
                            <img src={img2} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75 cursor-pointer'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>Chicago</span>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: 50, scale:0.75}} 
                        whileInView={{opacity: 1, x:0, scale: 1}} 
                        transition={{duration: 0.35}} 
                        whileHover={{scale: 1.01,
                        transition: { duration: 0.25 },}} 
                        className='displayCard h-[200px] lg:h-[300px] relative text-white bg-black rounded-md'>
                            <img src={img3} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75 cursor-pointer'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>Los Angeles</span>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: -50, scale:0.75}} 
                        whileInView={{opacity: 1, x:0, scale: 1}} 
                        transition={{duration: 0.4}} 
                        whileHover={{scale: 1.01,
                        transition: { duration: 0.25 },}} 
                        className='displayCard h-[200px] lg:h-[300px] relative text-white bg-black rounded-md'>
                            <img src={img4} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75 cursor-pointer'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>San Fransisco</span>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, y: 50, scale:0.75}} 
                        whileInView={{opacity: 1, y:0, scale: 1}} 
                        transition={{duration: 0.45}} 
                        whileHover={{scale: 1.01,
                        transition: { duration: 0.25 },}} 
                        className='displayCard h-[200px] lg:h-[300px] relative text-white bg-black rounded-md'>
                            <img src={img5} alt="" className='h-full w-full rounded-md relative  top-0 opacity-75 cursor-pointer'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>Florida</span>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: 50, scale:0.75}} 
                        whileInView={{opacity: 1, x:0, scale: 1}} 
                        transition={{duration: 0.5}} 
                        whileHover={{scale: 1.01,
                        transition: { duration: 0.25 },}} 
                        className='displayCard h-[200px] lg:h-[300px] md:col-span-2 w-full relative text-white bg-black rounded-md cursor-pointer'>
                            <img src={img6} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75' />
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>Miami</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default City;