import { PostProfileForm } from '@/features/profile/post-profile/ui/PostProfileForm/PostProfileForm';
import { Title } from '@/shared/ui/Title/Title';

import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>Login to Your Account</Title>
      <PostProfileForm />
    </div>
  );
};
