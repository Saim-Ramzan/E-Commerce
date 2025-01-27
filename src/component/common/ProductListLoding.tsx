import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function ProductListLoding() {
  const data = [1, 2, 3, 4, 5];
  return (
    <>
      {data?.map(() => (
        <>
          <div className="flex-1 flex rounded-xl items-center justify-between bg-white p-6 shadow-lg">
            <Skeleton className="h-4 w-[150px]" />
            <div className="flex gap-1">
              <Skeleton className="h-4 w-[150px]" />
            </div>
            <div className="flex gap-1 justify-center items-center">
              <Skeleton className="h-4 w-[150px]" />
            </div>
            <div className="flex gap-1">
              <Skeleton className="h-4 w-[150px]" />
            </div>

            <div className="flex gap-1">
              <Skeleton className="h-4 w-[150px]" />
            </div>

            <div className="flex gap-3">
              <Skeleton className="h-4 w-[150px] " />
            </div>
          </div>
        </>
      ))}
    </>

  );
}

export default ProductListLoding;
