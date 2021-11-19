import RingLoader from 'react-spinners/RingLoader';
import styles from './loading.module.css';

type LoadingProps = {
  isOffersLoading: boolean,
}

function Loading({isOffersLoading}: LoadingProps): JSX.Element {

  return (
    <div className={styles['loading']}>
      <RingLoader
        size={150}
        color={'#4481c3'}
        loading={isOffersLoading}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loading;
