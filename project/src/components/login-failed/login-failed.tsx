import styles from './login-failed.module.css';

function LoginFailed(): JSX.Element {
  return (
    <section className={styles['login-failed']}>
      <div className={styles['login-failed--info']}>
        <h2 className={styles['login-failed--info-title']}>Ошибка авторизации</h2>
        <p className={styles['login-failed--info-text']}>Попробуйте ещё раз</p>
      </div>
    </section>
  );
}

export default LoginFailed;
