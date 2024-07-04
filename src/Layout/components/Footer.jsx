import { motion } from "framer-motion";
import Logo from '../../assets/imgs/logo.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return ( 
        <>
            <div className="lg:p-8 flex flex-col items-center justify-center bg-[#1F4B43]">
                <motion.div 
                initial={{opacity: 0}} 
                whileInView={{opacity: 1}} 
                transition={{duration: 0.35}}
                className='flex flex-col gap-3 md:flex-row md:justify-between items-center border-b-2 border-opacity-5 border-white w-full p-6'>
                    <motion.img 
                    initial={{opacity: 0, y: 40}} 
                    whileInView={{opacity: 1, y: 0}} 
                    transition={{duration: 0.35}}
                    src={Logo} alt="" />
                    <motion.div 
                    initial={{opacity: 0, y: 40}} 
                    whileInView={{opacity: 1, y: 0}} 
                    transition={{duration: 0.35}}
                    className="flex flex-col gap-2 text-white text-xl">
                        <p className="text-base font-semibold">Follow us</p>
                        <div className="flex gap-4 items-center cursor-pointer text-xs">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </motion.div>
                </motion.div>
                <div className="w-full flex flex-col lg:flex-row items-center md:items-start md:justify-between gap-6 border-b-2 border-opacity-5 border-white p-6">
                    <motion.div
                    initial={{opacity: 0, x: -40}} 
                    whileInView={{opacity: 1, x: 0}} 
                    transition={{duration: 0.35}}
                    className="flex flex-col gap-3">
                        <h2 className="text-white opacity-50">Subscribe</h2>
                        <div className="relative">
                            <input 
                            type="email" 
                            placeholder="Your e-mail" 
                            className=" focus:outline-none text-white w-full py-3 text-sm placeholder:text-white bg-transparent border-b-2 border-opacity-5 border-white"
                            />
                            <button 
                            className="absolute bottom-3 text-sm right-0 w-fit flex items-center gap-2 bg-white bg-opacity-25 rounded-full text-white px-3 py-1">
                                Send
                                <FaLongArrowAltRight className="text"/>
                            </button>
                        </div>
                        <p className="text-white text-sm">Subscribe to our newsletter to receive our weekly feed.</p>
                    </motion.div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg::gap-0">
                        <motion.div 
                        initial={{opacity: 0, x: -40}} 
                        whileInView={{opacity: 1, x: 0}} 
                        transition={{duration: 0.35}}
                        className="flex flex-col gap-3 text-white">
                            <h2 className="text-white opacity-50">Discover</h2> 
                            <div className="flex flex-col gap-2 text-sm">
                                <a href="#" className="cursor-pointer">Miami</a>
                                <a href="#" className="cursor-pointer">New York</a>
                                <a href="#" className="cursor-pointer">Chicago</a>
                                <a href="#" className="cursor-pointer">Florida</a>
                                <a href="#" className="cursor-pointer">Los Angeles</a>
                                <a href="#" className="cursor-pointer">San Diego</a>
                            </div>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: -40}} 
                        whileInView={{opacity: 1, x: 0}} 
                        transition={{duration: 0.40}}
                        className="flex flex-col gap-3 text-white">
                            <h2 className="text-white opacity-50">Quick Links</h2>
                            <div className="flex flex-col gap-2 text-sm">
                                <a href="#" className="cursor-pointer">About</a>
                                <a href="#" className="cursor-pointer">Contact</a>
                                <a href="#" className="cursor-pointer">FAQs</a>
                                <a href="#" className="cursor-pointer">Blog</a>
                                <a href="#" className="cursor-pointer">Pricing Plans</a>
                                <a href="#" className="cursor-pointer">Privacy Policy</a>
                                <a href="#" className="cursor-pointer">Terms & Conditions</a>
                            </div>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: -40}} 
                        whileInView={{opacity: 1, x: 0}} 
                        transition={{duration: 0.45}}
                        className="flex flex-col gap-3 text-white">
                            <h2 className="text-white opacity-50">Contact Us</h2>
                            <div className="flex flex-col gap-2 text-sm">
                                <a href="#" className="cursor-pointer">favourto91@gmail.com</a>
                                <a href="#" className="cursor-pointer">07010752695</a>
                            </div>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, x: -40}} 
                        whileInView={{opacity: 1, x: 0}} 
                        transition={{duration: 0.5}}
                        className="flex flex-col gap-3 text-white">
                            <h2 className="text-white opacity-50">Our Address</h2>
                            <div className="flex flex-col gap-2 text-sm">
                                <p className=" whitespace-pre-wrap">99 Fifth Avenue, 3rd Floor
                                San Francisco, CA 1980</p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div 
                    initial={{opacity: 0, y: -40}} 
                    whileInView={{opacity: 1, y: 0}} 
                    transition={{duration: 0.35}}
                    className="flex flex-col gap-3 text-white">
                        <h2 className="text-white opacity-50">Get the app</h2>
                        <motion.button 
                        whileHover={{scale: 1.05,
                        transition: { duration: 0.25 },}} 
                        className="w-fit text-white flex items-center gap-2 bg-white bg-opacity-15 px-4 py-2 rounded-xl">
                            <FaApple className="text-2xl"/> <span className="text-2xl opacity-15"> | </span> <span className="text-xs flex flex-col items-start">
                                <span className=" whitespace-nowrap font-light">Download on the</span>
                                <span className="font-semibold whitespace-nowrap">Apple Store</span>
                            </span>
                        </motion.button>
                        <motion.button 
                        whileHover={{scale: 1.05,
                        transition: { duration: 0.25 },}} 
                        className="w-fit text-white flex items-center gap-2 bg-white bg-opacity-15 px-4 py-2 rounded-xl">
                            <BiLogoPlayStore className="text-2xl"/> <span className="text-2xl opacity-15">|</span> <span className="text-xs flex flex-col items-start">
                                <span className=" whitespace-nowrap font-light">Download on the</span>
                                <span className="font-semibold whitespace-nowrap">Play Store</span>
                            </span>
                        </motion.button>
                    </motion.div>
                </div>
                <div className="w-full flex items-center justify-center text-center text-white text-sm p-2">
                    <motion.div 
                    initial={{opacity: 0, y: 20}} 
                    whileInView={{opacity: 1, y: 0}} 
                    transition={{duration: 0.35}}
                    className="flex flex-col gap-1">
                        <p className="text-sm">Copyright &copy; {year}. JustHome</p>
                        <p className="text-xs font-light">Made with ❤️ by Favour Odili.</p>
                    </motion.div>
                </div>
            </div>    
        </>
    );
}

export default Footer;