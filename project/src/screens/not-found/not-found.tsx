import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function NotFound(): JSX.Element {
  return (
    <div className="page page--not-found">
      <Header/>
      <main className="page__main--not-found">
        <div className="container">
          <section className="not-found">
            <h1 className="not-found__title">404. Page not found</h1>
            <Link className="not-found__link" to="/">Вернуться на главную</Link>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default NotFound;
