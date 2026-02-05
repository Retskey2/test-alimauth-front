import { useProfileStore } from '@/entities/profile';
import { type PostProfileValues, postProfileSchema } from '@/features/profile/post-profile';
import { Button, TextField } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import styles from './PostProfileForm.module.scss';

export const PostProfileForm = () => {
  const { updateProfile, isLoading, error } = useProfileStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PostProfileValues>({
    resolver: zodResolver(postProfileSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: PostProfileValues) => {
    await updateProfile(data);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      {error && <p role="alert">{error}</p>}

      <fieldset className={styles.inputWrapper} disabled={isLoading}>
        <TextField
          label="Name"
          {...register('username')}
          error={errors.username?.message}
          placeholder="Enter your name"
        />

        <TextField
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="Enter your Email"
        />

        <TextField
          type="password"
          label="Password"
          autoComplete="new-password"
          {...register('password')}
          error={errors.password?.message}
          placeholder="Enter your password"
        />
      </fieldset>

      <Button type="submit" disabled={!isValid} className={styles.button} isLoading={isLoading}>
        Login
      </Button>
    </form>
  );
};
