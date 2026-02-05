import { z } from 'zod';

export const postProfileSchema = z.object({
  username: z.string().min(3, 'Имя слишком короткое'),
  email: z.email('Некорректный email'),
  password: z
    .string()
    .min(5, 'Пароль слишком короткий')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Пароль должен содержать хотя бы один специальный символ"'),
});

export type PostProfileValues = z.infer<typeof postProfileSchema>;
