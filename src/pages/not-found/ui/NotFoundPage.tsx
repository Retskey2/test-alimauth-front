import { Title } from '@/shared/ui';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <main className={styles.container}>
      <Title className={styles.numberError}>404</Title>
      <Title as="h2" className={styles.textError}>
        Page not found!
      </Title>
    </main>
  );
};
