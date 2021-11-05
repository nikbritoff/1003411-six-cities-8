import styles from './loading-failed.module.css';

function LoadingFailed(): JSX.Element {
  return (
    <section className={styles['loading-failed']}>
      <div className={styles['loading-failed--info']}>
        <h2 className={styles['loading-failed--info-title']}>Ошибка получения данных</h2>
        <p className={styles['loading-failed--info-text']}>Обновите страницу позднее</p>
      </div>
    </section>
  );
}

export default LoadingFailed;
