import { type IProfile } from '@/entities/profile';
import { DisplayField } from '@/shared/ui';
import clsx from 'clsx';

import styles from './PreviewProfile.module.scss';

type IPreviewProfileForm = Partial<IProfile> & { classname?: string };

export const PreviewProfileForm = ({ email, username, classname }: IPreviewProfileForm) => {
  return (
    <div className={clsx(styles.container, classname)}>
      <DisplayField label="Name" value={username} />
      <DisplayField label="Email" value={email} />
    </div>
  );
};
