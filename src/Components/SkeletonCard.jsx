import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className=" my-[5rem]">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
