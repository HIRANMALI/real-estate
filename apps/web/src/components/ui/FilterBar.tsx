'use client';

import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FilterBar() {
  return (
    <div className="bg-white border-y border-border sticky top-[72px] md:top-[88px] z-40 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative w-full lg:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by city, locality or project name..."
              className="w-full pl-12 pr-4 py-3 bg-bg border border-border rounded-sm text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Desktop Filters */}
          <div className="hidden lg:flex flex-1 items-center gap-4 justify-end">
            <FilterDropdown label="Type" options={['Apartment', 'Villa', 'Plot', 'Commercial', 'Penthouse', 'Farmhouse']} />
            <FilterDropdown label="Budget" options={['< 1 Cr', '1 Cr - 5 Cr', '5 Cr - 10 Cr', '10 Cr+']} />
            <FilterDropdown label="Beds" options={['1 BHK', '2 BHK', '3 BHK', '4 BHK+']} />
            <FilterDropdown label="City" options={['Mumbai', 'Pune', 'Ahmedabad', 'Bengaluru', 'Surat', 'Hyderabad', 'Jaipur', 'Delhi NCR']} />
            
            <button className="flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-dark transition-all">
              <SlidersHorizontal size={14} />
              <span>More Filters</span>
            </button>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="flex lg:hidden w-full gap-2">
            <button className="flex-1 flex items-center justify-between px-4 py-3 border border-border rounded-sm text-sm font-medium">
              <span>Filter by Type</span>
              <ChevronDown size={16} />
            </button>
            <button className="p-3 border border-border rounded-sm text-dark hover:bg-bg transition-colors">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterDropdown({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="relative group/dropdown">
      <button className="flex items-center gap-3 px-5 py-3 border border-border rounded-sm text-sm font-medium hover:border-accent transition-colors group-hover/dropdown:border-accent min-w-[120px] justify-between">
        <span className="text-[10px] uppercase tracking-widest font-bold text-muted mr-2">{label}</span>
        <span className="text-dark">All</span>
        <ChevronDown size={14} className="text-muted group-hover/dropdown:rotate-180 transition-transform duration-300" />
      </button>
      
      <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-border shadow-2xl rounded-sm opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 z-50 p-4">
        <div className="grid grid-cols-1 gap-2">
          {options.map((option) => (
            <label key={option} className="flex items-center gap-3 p-2 hover:bg-bg rounded-sm cursor-pointer group/item">
              <input type="checkbox" className="w-4 h-4 accent-accent" />
              <span className="text-xs text-muted group-hover/item:text-dark transition-colors">{option}</span>
            </label>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border flex justify-between">
          <button className="text-[10px] uppercase tracking-widest font-bold text-muted hover:text-dark">Clear</button>
          <button className="text-[10px] uppercase tracking-widest font-bold text-accent hover:text-accent-dark">Apply</button>
        </div>
      </div>
    </div>
  );
}
