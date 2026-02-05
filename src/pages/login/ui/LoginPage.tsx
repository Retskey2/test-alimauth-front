import { PostProfileForm } from '@/features/profile/post-profile';
import { Title } from '@/shared/ui';

import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>Login to Your Account</Title>
      <PostProfileForm />
    </div>
  );
};
