import { CoffeeButton } from '../CoffeeButton';

import styles from './styles.module.scss';

export function HeaderDesktop() {
    return (
        <>
            <div className={styles.headerBox}>
                <a href="/">
                    <img src="./logo-desktop.svg" alt="logo" />
                </a>

                <div className={styles.headerMenu}>
                    <ul>
                        <li>
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

                <CoffeeButton />
            </div>
        </>
    )
}