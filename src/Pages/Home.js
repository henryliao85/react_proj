import Syllabus from '../Components/Syllabus';

const Home = () => {
    
    const baseUrl = "./files/";
    const toDownload = true;
    
    return(
        <>
            <div className='row homepage-syllabus'>
                <div className='col s5 push-s7'>
                    <Syllabus baseUrl={baseUrl} toDownload={toDownload} />
                </div>
            </div>
        </>
    )
}

export default Home;