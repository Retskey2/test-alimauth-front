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
      {error && <p>{error}</p>}

      <div className={styles.inputWrapper}>
        <TextField
          label="Name"
          disabled={isLoading}
          {...register('username')}
          error={errors.username?.message}
          placeholder="Enter your name"
        />

        <TextField
          label="Email"
          disabled={isLoading}
          {...register('email')}
          error={errors.email?.message}
          placeholder="Enter your Email"
        />

        <TextField
          type="password"
          label="Password"
          disabled={isLoading}
          autoComplete="new-password"
          {...register('password')}
          error={errors.password?.message}
          placeholder="Enter your password"
        />
      </div>

      <Button type="submit" disabled={!isValid} className={styles.button} isLoading={isLoading}>
        Login
      </Button>
    </form>
  );
};
