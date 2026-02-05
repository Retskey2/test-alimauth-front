import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

import styles from './LayoutBackround.module.scss';

export const LayoutBackround = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={clsx(styles.blob, styles.topRight)} />
        <div className={clsx(styles.blob, styles.bottomLeft)} />
      </div>
      <Outlet />
    </>
  );
};
