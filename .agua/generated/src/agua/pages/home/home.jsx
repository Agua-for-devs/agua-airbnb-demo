import React from 'react';


import styles from './home.module.css';

/**
 * Home component.
 * @component
 * @type {React.FC}
 * 
 * @returns {React.ReactElement} The Home component.
 */
const Home = () =>{
    
    
    
    function aguaRender() {
        return(
            <main custom-agua-item="screen"  className={styles.Home}>
                

            </main>
        );
    };

    return aguaRender();
}

export default Home;
            