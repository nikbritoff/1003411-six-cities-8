import { css } from '@emotion/react';
import RingLoader from 'react-spinners/RingLoader';
import styles from './loading.module.css';

type LoadingProps = {
  isOffersLoading: boolean,
}

function Loading({isOffersLoading}: LoadingProps): JSX.Element {
  const override = css`
  display: block;
  margin: 0 auto;
`;

  return (
    <div className={styles['loading']}>
      <RingLoader
        css={override}
        size={150}
        color={'#4481c3'}
        loading={isOffersLoading}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loading;
