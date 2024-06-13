import Recommend from './components/Featured';
import Hero from './components/Hero';
function Home() {
    return ( 
        <>
            <div className='h-screen'>
                <Hero/>
                <Recommend/>
            </div>
        </>
    );
}

export default Home;