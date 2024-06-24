import {motion} from "framer-motion";
import image from "../../../assets/imgs/local.png";
import { FaPeopleGroup } from "react-icons/fa6";
function Local() {
    return ( 
        <>
        <div className="p-8 bg-[#1F4B43] flex flex-col justify-center gap-5 text-white">
            <div className="flex flex-col gap-2 lg:flex-row md:justify-between items-center">
                <motion.div 
                initial={{opacity: 0, x:-100, scale:0.5}} 
                whileInView={{opacity: 1, x:0, scale:1}} 
                transition={{duration: 0.5}} 
                className="lg:w-1/2 relative">
                    <img src={image} alt="" className="max-h-[500px] lg:w-[80%] mx-auto object-cover rounded-xl"/>
                    <motion.div 
                    initial={{opacity: 0, y: 100, scaleY: 0.5}}
                    whileInView={{opacity: 1, y:0, scaleY: 1}}
                    transition={{duration: 0.75}}
                    className="bg-white rounded-lg w-fit p-2 lg:p-3 text-black flex items-center gap-2 absolute top-[10%] left-[5%] lg:left-[15%]">
                        <div className="bg-[#F6E6CB] rounded-full p-2 text-md w-fit text-black"><FaPeopleGroup /></div>
                        <div className="flex flex-col gap-1 text-xs">
                            <span>Total Clients</span>
                            <span>7,000M</span>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div 
                initial={{opacity: 0, y:50, scaleY: 0.75}}
                whileInView={{opacity: 1, y:0, scaleY: 1}}
                transition={{duration: 0.5}}
                className="lg:w-1/2">
                    <div className="md:w-3/4 mx-auto flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold capitalize md:w-[70%] mx-auto text-center lg:text-start lg:w-full lg:mx-0">Local expertise for
                    luxury homes</h2>
                    <p className="text-xs font-light md:w-[80%] mx-auto lg:w-full lg:mx-0 text-center lg:text-start">At JustHome Real Estate, our deep local expertise and personalized service ensure you find the perfect property. 
                    Trust our dedicated team to navigate the vibrant real estate landscape, offering insider knowledge and a commitment to your satisfaction in every transaction. 
                    Let us make your dream home a reality.</p>
                    <button className="bg-primary text-black md:w-[80%] mx-auto lg:w-fit p-2 rounded-lg text-sm capitalize font-semibold">
                        learn more →
                    </button>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:flex gap-4 items-center lg:flex-row lg:justify-around">
                <motion.div 
                initial={{opacity: 0, y: 20}} 
                whileInView={{opacity: 1, y: 0}} 
                transition={{duration: 0.5}}
                className="flex flex-col items-center justify-center gap-2">
                    <span className="text-primary text-3xl font-semibold">$18M</span>
                    <span className="text-xs">Owned from properties transactions</span>
                </motion.div>
                <motion.div 
                initial={{opacity: 0, y: 25}} 
                whileInView={{opacity: 1, y: 0}} 
                transition={{duration: 0.75}}
                className="flex flex-col items-center justify-center gap-2">
                    <span className="text-primary text-3xl font-semibold">26K</span>
                    <span className="text-xs">Properties for Buy</span>
                </motion.div>
                <motion.div 
                initial={{opacity: 0, y: 30}} 
                whileInView={{opacity: 1, y: 0}} 
                transition={{duration: 1}}
                className="flex flex-col items-center justify-center gap-2">
                    <span className="text-primary text-3xl font-semibold">15K</span>
                    <span className="text-xs">Properties for Sell</span>
                </motion.div>
                <motion.div 
                initial={{opacity: 0, y: 35}} 
                whileInView={{opacity: 1, y: 0}} 
                transition={{duration: 1.25}}
                className="flex flex-col items-center justify-center gap-2">
                    <span className="text-primary text-3xl font-semibold">800</span>
                    <span className="text-xs">Daily completed transactions.</span>
                </motion.div>
            </div>
        </div>
        </>
    );
}

export default Local;