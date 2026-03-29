export default function PropertyCardSkeleton() {
  return (
    <div className="bg-white border border-border overflow-hidden rounded-sm flex flex-col h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="h-64 bg-slate-200" />
      
      {/* Content Skeleton */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="h-3 w-24 bg-slate-200 rounded-full mb-4" />
        <div className="h-6 w-3/4 bg-slate-200 rounded-full mb-4" />
        <div className="h-4 w-full bg-slate-200 rounded-full mb-2" />
        <div className="h-4 w-full bg-slate-200 rounded-full mb-6" />
        
        {/* Specs Skeleton */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
          <div className="h-10 bg-slate-100 rounded-sm" />
          <div className="h-10 bg-slate-100 rounded-sm" />
          <div className="h-10 bg-slate-100 rounded-sm" />
        </div>
      </div>
    </div>
  );
}
