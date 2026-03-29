'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: '100% Verified Properties',
    description: 'Every listing on our platform goes through a rigorous 5-step verification process to ensure transparency and trust.'
  },
  {
    icon: Award,
    title: 'Exquisite Curation',
    description: 'We don\'t list everything. We only list the best. Our editorial team handpicks properties that define luxury.'
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Service',
    description: 'Our luxury property specialists provide end-to-end assistance, from private viewings to seamless closing.'
  },
  {
    icon: Zap,
    title: 'Prime Locations Only',
    description: 'Focusing on India\'s most prestigious neighborhoods, ensuring your investment grows in value over time.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight uppercase">
                Why Choose <span className="text-accent underline decoration-2 underline-offset-4">SHINE NATIVE?</span>
              </h2>
              <p className="text-muted text-lg mb-10 leading-relaxed font-light">
                We bridge the gap between aspirational living and reality. Our mission is to provide an elite real estate experience that the most discerning clients expect.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {reasons.map((reason, i) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="w-12 h-12 bg-white border border-border flex items-center justify-center rounded-sm">
                      <reason.icon className="text-accent w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-dark">{reason.title}</h4>
                    <p className="text-xs text-muted leading-relaxed font-medium">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a12cf1a57?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/20" />
            </motion.div>
            {/* Visual elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-8 border-accent/20 z-10" />
            <div className="absolute top-10 left-10 p-6 bg-white/90 backdrop-blur-md border border-border z-20 max-w-xs shadow-xl rounded-sm">
              <p className="text-dark font-bold text-base leading-relaxed mb-4">
                "Finding a home wasn't just a transaction, it was a transformation of our lifestyle."
              </p>
              <p className="text-[10px] uppercase tracking-widest font-black text-accent">Anirudh Sharma, Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
