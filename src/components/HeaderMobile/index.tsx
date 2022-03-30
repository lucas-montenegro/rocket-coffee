import { useState } from 'react';
import styles from './styles.module.scss';

export function HeaderMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function openMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className={styles.headerBox}>
                <a href="/">
                    <img src="./logo-mobile.svg" alt="logo" />
                </a>

                <button onClick={openMenu}>
                    { isMenuOpen === true
                        ? <img src="./menu-burguer-close.svg" alt="menu-burguer-close" />
                        : <img src="./menu-burguer-open.svg" alt="menu-burguer-open" />
                    }
                </button>
            </div>

            { isMenuOpen === true
                ? <div className={styles.headerMenu}>
                    <ul>
                        <li className={styles.linkActive}>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a href="/">Menu</a>
                        </li>

                        <li>
                            <a href="/">Recompensas</a>
                        </li>

                        <li>
                            <a href="/">Gift Cards</a>
                        </li>

                        <li>
                            <a href="/">Lojas</a>
                        </li>
                    </ul>
                  </div>
                : ""
            }            
        </>
    )
}