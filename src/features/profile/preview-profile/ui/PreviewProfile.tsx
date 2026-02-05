import { type Profile } from '@/entities/profile/model/types';
import { DisplayField } from '@/shared/ui/DisplayField/DisplayField';
import clsx from 'clsx';

import styles from './PreviewProfile.module.scss';

type IPreviewProfileForm = Partial<Profile> & { classname?: string };

export const PreviewProfileForm = ({ email, username, classname }: IPreviewProfileForm) => {
  return (
    <div className={clsx(styles.container, classname)}>
      <DisplayField label="Name" value={username} />
      <DisplayField label="Email" value={email} />
    </div>
  );
};
