import City from './components/City';
import Recommend from './components/Featured';
import Hero from './components/Hero';
function Home() {
    return ( 
        <>
            <div className='h-screen'>
                <Hero/>
                <Recommend/>
                <City/>
            </div>
        </>
    );
}

export default Home;