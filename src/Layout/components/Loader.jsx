import Logo from '../../assets/imgs/greenLogo.svg';
function Loader() {

    return ( 
        <>
            <div className="fixed top-0 left-0 h-screen w-full overflow-hidden bg-white z-[60] flex flex-col justify-center items-center">
                <img src={Logo} alt=""  className='animate-bounce'/>
            </div>
        </>
    );
}

export default Loader;