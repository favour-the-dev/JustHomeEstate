import Local from './components/Local';
import BestProperties from './components/Best';
import WhyChoose from './components/whyChoose';
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
                <WhyChoose/>
                <BestProperties/>
                <Local/>
            </div>
        </>
    );
}

export default Home;