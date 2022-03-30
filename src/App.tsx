import { useEffect, useState } from 'react';
import { useWindowDimensions } from './hooks/useWindowDimensions';

import { HeaderDesktop } from './components/HeaderDesktop';
import { HeaderMobile } from './components/HeaderMobile';

import styles from './styles/App.module.scss';
import { CoffeeButton } from './components/CoffeeButton';

function App() {
  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState((width > 768) ? false : true);

  useEffect(() => {
    if (width > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width])

  return (
    <>
      { isMobile === false 
      ? <> 
        <HeaderDesktop />
        <div className={styles.hero}>
          <div className={styles.homepageTitles}>
            <h1>Great Coffe</h1>
            <h1>&lt; Great Code /&gt;</h1>  
          </div>

          <img src="./rocket-coffee.svg" alt="cofee image" />
        </div>

        <div className={styles.blurOne} />
        <div className={styles.blurTwo} />
        </>
      : <>
          <HeaderMobile />

          <div className={styles.heroMobile}>
            <h1>O café que fará seu código decolar para o próximo nível.</h1>

            <CoffeeButton />

            <div className={styles.homepageTitles}>
              <h1>Great Coffe</h1>
              <h1>&lt; Great Code /&gt;</h1>  
            </div>

            <img src="./rocket-coffee.svg" alt="cofee image" />

            <div className={styles.blurMobile} />
          </div>

          
        </>
      }
    </> 
  )
}

export default App;
