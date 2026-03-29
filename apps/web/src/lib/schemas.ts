import * as z from 'zod';

export const inquirySchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  interest: z.enum(['Buying', 'Renting', 'Investment', 'General']),
  message: z.string()
    .min(20, 'Message must be at least 20 characters')
    .max(500, 'Message cannot exceed 500 characters'),
  propertyId: z.string().optional(),
  agree: z.literal(true, {
    message: 'You must agree to the privacy policy',
  }),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
