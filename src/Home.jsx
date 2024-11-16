import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
   


const Home = () => {
    
    return (
        <div className='container'>
        <h1>Home</h1>
        <Link className='home-link' to={'/page1'}>Page 1</Link>
        <Link className='home-link' to={'/page2'}>Page 2</Link>
        </div>
    );
}

export default Home;