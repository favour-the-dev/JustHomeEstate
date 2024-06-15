import img1 from '../../../assets/imgs/cities/newYork.jpeg';
import img2 from '../../../assets/imgs/cities/chicago.jpeg';
import img3 from '../../../assets/imgs/cities/losAngles.jpg';
import img4 from '../../../assets/imgs/cities/sanfransico.jpeg';
import img5 from '../../../assets/imgs/cities/florida.jpeg';
import img6 from '../../../assets/imgs/cities/miami.jpg';
function City() {  
    return ( 
        <>
            <div className="w-full flex flex-col justify-center items-center p-4 mt-4">
                <div className="flex flex-col gap-4">
                    <div className="text-center">
                        <h2 className="font-bold text-3xl">Find Properties in These Cities</h2>
                        <p className="text-sm">See the top assets from these locations</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 md:w-[90%] mx-auto">
                        <div className='displayCard relative h-[300px] md:col-span-2 w-full text-white bg-black rounded-md cursor-pointer'>
                            <img src={img1} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>NewYork</span>
                        </div>
                        <div className='displayCard h-[300px] relative text-white bg-black rounded-md'>
                            <img src={img2} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75 cursor-pointer'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>Chicago</span>
                        </div>
                        <div className='displayCard h-[300px] relative text-white bg-black rounded-md'>
                            <img src={img3} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75 cursor-pointer'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>Los Angeles</span>
                        </div>
                        <div className='displayCard h-[300px] relative text-white bg-black rounded-md'>
                            <img src={img4} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75 cursor-pointer'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>San Fransisco</span>
                        </div>
                        <div className='displayCard h-[300px] relative text-white bg-black rounded-md'>
                            <img src={img5} alt="" className='h-full w-full rounded-md relative  top-0 opacity-75 cursor-pointer'/>
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>Florida</span>
                        </div>
                        <div className='displayCard h-[300px] md:col-span-2 w-full relative text-white bg-black rounded-md cursor-pointer'>
                            <img src={img6} alt="" className='h-full w-full rounded-md absolute top-0 opacity-75' />
                            <span className='absolute bottom-0 right-1 z-10 text-2xl font-semibold'>Miami</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default City;