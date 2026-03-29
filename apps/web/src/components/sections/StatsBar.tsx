'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Properties Sold', value: '450+' },
  { label: 'Verified Listings', value: '1200+' },
  { label: 'Happy Clients', value: '3000+' },
  { label: 'Cities Covered', value: '15+' },
];

export default function StatsBar() {
  return (
    <section className="bg-dark py-12 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-accent">
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
