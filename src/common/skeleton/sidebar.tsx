import { Skeleton } from "@/components/ui/skeleton";

const SidebarSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3 w-[250px] ">
      <div className="flex justify-between p-2 py-4">
        <Skeleton className="h-40 w-full  rounded-sm" />
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <Skeleton className="h-8 w-[250px] rounded-sm" />
        <Skeleton className="h-8 w-[250px] rounded-sm" />
        <Skeleton className="h-8 w-[250px] rounded-sm" />
        <Skeleton className="h-8 w-[250px] rounded-sm" />
        <Skeleton className="h-8 w-[250px] rounded-sm" />
        <Skeleton className="h-8 w-[250px] rounded-sm" />
        <Skeleton className="h-8 w-[250px] rounded-sm" />
      </div>
    </div>
  );
};

export default SidebarSkeleton;
