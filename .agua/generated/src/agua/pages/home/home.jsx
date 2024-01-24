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
                
<section custom-agua-item="layer" className={styles.homebanner}   >
<p custom-agua-item="text" className={styles['text-1-d3fecca2132345e49c8c93fa9c44f55b']}   >Learn about Guest Favorites, the most loved homes on Airbnb</p>
</section>
<section custom-agua-item="layer" className={styles.divider}   ></section>

            </main>
        );
    };

    return aguaRender();
}

export default Home;
            