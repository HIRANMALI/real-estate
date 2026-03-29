'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { inquirySchema, type InquiryFormValues } from '@/lib/schemas';
import { cn } from '@/lib/utils';
import WhatsAppButton from './WhatsAppButton';

type InquiryFormProps = {
  propertyId?: string;
  propertyName?: string;
  className?: string;
  showTitle?: boolean;
};

export default function InquiryForm({ propertyId, propertyName, className, showTitle = true }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      interest: 'Buying',
      propertyId: propertyId || '',
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form Submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <div className={cn("bg-white p-6 sm:p-10 border border-accent/20 rounded-sm text-center space-y-4", className)}>
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12 }}
          >
            <CheckCircle2 className="text-accent w-20 h-20" />
          </motion.div>
        </div>
        <h3 className="text-2xl font-black text-dark uppercase tracking-widest">Thank You!</h3>
        <p className="text-muted text-sm max-w-xs mx-auto">
          Your inquiry has been received. Our luxury property specialist will reach out to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="bg-dark text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 hover:bg-accent transition-colors mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className={cn("bg-white p-6 sm:p-10 border border-border rounded-sm shadow-sm", className)}>
      {showTitle && (
        <h3 className="text-xl font-black text-dark mb-8 uppercase tracking-widest border-b border-black/5 pb-4">
          {propertyName ? `Inquire about ${propertyName}` : 'Contact Our Experts'}
        </h3>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:space-y-6">
        <input type="hidden" {...register('propertyId')} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {/* First Name */}
          <div className="space-y-1">
            <input
              {...register('fullName')}
              placeholder="First Name"
              className={cn(
                "w-full px-5 py-3 lg:px-6 lg:py-4 bg-[#FBFBFB] border border-black/5 rounded-sm text-sm focus:outline-none focus:border-accent transition-all placeholder:text-muted/40 font-medium",
                errors.fullName ? "border-red-500" : ""
              )}
            />
          </div>
          {/* Last Name */}
          <div className="space-y-1">
            <input
              placeholder="Last Name"
              className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-[#FBFBFB] border border-black/5 rounded-sm text-sm focus:outline-none focus:border-accent transition-all placeholder:text-muted/40 font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {/* Email */}
          <div className="space-y-1">
            <input
              {...register('email')}
              placeholder="Email"
              className={cn(
                "w-full px-5 py-3 lg:px-6 lg:py-4 bg-[#FBFBFB] border border-black/5 rounded-sm text-sm focus:outline-none focus:border-accent transition-all placeholder:text-muted/40 font-medium",
                errors.email ? "border-red-500" : ""
              )}
            />
          </div>
          {/* Company */}
          <div className="space-y-1">
            <input
              placeholder="Company"
              className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-[#FBFBFB] border border-black/5 rounded-sm text-sm focus:outline-none focus:border-accent transition-all placeholder:text-muted/40 font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {/* Phone with Country Code placeholder */}
          <div className="flex gap-2">
            <div className="w-24 px-2 py-3 lg:py-4 bg-dark text-white font-bold rounded-sm text-[10px] flex items-center justify-center gap-2">
              <span>🇮🇳</span>
              <span>+91</span>
            </div>
            <input
              {...register('phone')}
              placeholder="Phone Number"
              className={cn(
                "flex-1 px-5 py-3 lg:px-6 lg:py-4 bg-[#FBFBFB] border border-black/5 rounded-sm text-sm focus:outline-none focus:border-accent transition-all placeholder:text-muted/40 font-medium",
                errors.phone ? "border-red-500" : ""
              )}
            />
          </div>
          {/* City */}
          <select className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-[#FBFBFB] border border-black/5 rounded-sm text-sm focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer text-muted/60 font-medium">
            <option>City</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Ahmedabad</option>
            <option>Bengaluru</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          <select className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-[#FBFBFB] border border-black/5 rounded-sm text-sm focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer text-muted/60 font-medium">
            <option>Min. Budget</option>
          </select>
          <select className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-[#FBFBFB] border border-black/5 rounded-sm text-sm focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer text-muted/60 font-medium">
            <option>Max. Budget</option>
          </select>
        </div>

        {/* reCAPTCHA Placeholder */}
        <div className="bg-[#F9F9F9] border border-black/5 p-4 lg:p-5 flex items-center justify-between rounded-sm">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-black/10 bg-white rounded-sm" />
            <span className="text-[10px] text-muted font-bold uppercase tracking-wider">I'm not a robot</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-no-repeat bg-contain" style={{ backgroundImage: 'url(https://www.gstatic.com/recaptcha/api2/logo_48.png)' }} />
            <span className="text-[8px] text-muted font-black leading-tight">reCAPTCHA</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 lg:pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full bg-black text-white py-5 lg:py-6 rounded-sm font-black tracking-[0.2em] uppercase text-xs transition-all flex items-center justify-center gap-3 shadow-2xl",
              isSubmitting ? "opacity-90 cursor-not-allowed" : "hover:bg-accent ring-8 ring-accent/0 hover:ring-accent/10"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                <span>Processing...</span>
              </>
            ) : "Submit Inquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
