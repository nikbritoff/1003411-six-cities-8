import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import styles from './not-found.module.css';


function NotFound(): JSX.Element {
  return (
    <div className={styles['page--not-found']}>
      <Header/>
      <main className={styles['page__main--not-found']}>
        <div className={styles.container}>
          <section className={styles['not-found']}>
            <h1 className={styles['not-found__title']}>404. Page not found</h1>
            <Link className={styles['not-found__link']} to="/">Вернуться на главную</Link>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default NotFound;
