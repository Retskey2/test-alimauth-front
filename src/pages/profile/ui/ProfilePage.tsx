import { useProfileStore } from '@/entities/profile';
import { PreviewProfileForm } from '@/features/profile/preview-profile';
import { Button, Title } from '@/shared/ui';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const { logout, profile } = useProfileStore();

  return (
    <div className={styles.container}>
      <Title className={styles.title}>Your Profile</Title>
      <PreviewProfileForm
        classname={styles.previewForm}
        email={profile?.email}
        username={profile?.username}
      />
      <Button className={styles.button} type="submit" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};
