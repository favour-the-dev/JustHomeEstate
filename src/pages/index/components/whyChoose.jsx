import { TbHomeSearch } from "react-icons/tb";
import { TbHomeDollar } from "react-icons/tb";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdOutlineAddHomeWork } from "react-icons/md";
import {motion} from "framer-motion";
function WhyChoose() {
    return ( 
        <>
            <div className="p-6 flex flex-col justify-center items-center bg-primary text-black md:min-h-[50dvh]">
                <div className="flex flex-col gap-4">
                    <motion.div initial={{opacity: 0, y:-10}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.75}} className="text-center">
                        <h2 className="font-semibold text-3xl">
                        Why Choose Us
                        </h2>
                        <h3 className="text-sm">Reasons why You should use justHome</h3>
                    </motion.div>
                    <div className="flex flex-col gap-6 md:gap-3 md:flex-row items-center justify-between p-3">
                        <motion.div initial={{opacity: 0, x:-100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5}} className="flex flex-col items-center justify-center">
                            <TbHomeSearch className="text-5xl"/>
                            <h3 className="font-semibold text-sm">Find your future Home</h3>
                            <p className="text-xs text-center md:w-[70%]">We help you find a new home by offering a
                            smart real estate experience.</p>
                        </motion.div>
                        <motion.div initial={{opacity: 0, x:-100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.75}} className="flex flex-col items-center justify-center">
                            <MdOutlineRealEstateAgent className="text-5xl"/>
                            <h3 className="font-semibold text-sm">Experienced agents</h3>
                            <p className="text-xs text-center md:w-[70%]">Find an experienced agent who knows your
                            market best.</p>
                        </motion.div>
                        <motion.div initial={{opacity: 0, x:-100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1}} className="flex flex-col items-center justify-center">
                            <TbHomeDollar className="text-5xl"/>
                            <h3 className="font-semibold text-sm">Buy or rent homes</h3>
                            <p className="text-xs text-center md:w-[70%]">Millions of houses and apartments in your
                            favourite cities</p>
                        </motion.div>
                        <motion.div initial={{opacity: 0, x:-100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.25}} className="flex flex-col items-center justify-center">
                            <MdOutlineAddHomeWork className="text-5xl"/>
                            <h3 className="font-semibold text-sm">List your own property</h3>
                            <p className="text-xs text-center md:w-[70%]">Sign up now and sell or rent your own
                            properties</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChoose;