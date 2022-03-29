import { Header } from './components/Header';

import styles from './styles/App.module.scss';

function App() {
  return (
    <>
      <Header />
      <div className={styles.hero}>
        <h1>Great Coffe</h1>
        <h1>&lt; Great Code /&gt;</h1>

        <img src="./rocket-coffee.svg" alt="cofee" />
      </div>

      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />
    </>
  )
}

export default App;
