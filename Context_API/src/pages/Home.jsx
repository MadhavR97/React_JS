import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            style={{
                background: darkMode ? '#222' : '#fafafa',
                color: darkMode ? 'white' : 'black',
                minHeight: '100vh',
                padding: '2rem'
            }}
        >
            <h2>Welcome to the Home Page</h2>
            <p>Theme is {darkMode ? 'Dark' : 'Light'}</p>
        </div>
    );
};

export default Home;
