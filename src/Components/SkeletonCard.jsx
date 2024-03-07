import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className=" mx-auto my-[5rem]   w-[90%] ">
      <div className="flex w-[100%] flex-col  items-center space-y-3">
        <Skeleton className="h-[315px] w-[100%] rounded-xl" />
        <div className="  space-y-2">
          <Skeleton className=" h-4 w-[150px] sm:w-[200px]" />
          <Skeleton className=" mx-auto  h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
