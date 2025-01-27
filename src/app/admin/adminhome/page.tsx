"use client";
import { BarChart } from "@/components/chart";
import { LucideShoppingBag, Leaf , User2Icon} from "lucide-react";

export default function Admin() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 bg-[#dedeff38] ">
      <div className="grid gap-6 md:grid-cols-3  p-6 rounded-xl">
        <div className="flex flex-col justify-center items-center aspect-video rounded-xl bg-white shadow-lg  p-4 ">
          <div className="flex gap-3">
            <User2Icon />
            <h2 className="text-lg font-semibold">Total Users</h2>
          </div>
          <h3 className="text-3xl font-bold">500</h3>
        </div>
        <div className="flex flex-col justify-center items-center aspect-video rounded-xl bg-white shadow-lg  p-4 ">
          <div className="flex gap-3">
            <LucideShoppingBag />
            <h2 className="text-lg font-semibold">Total Products</h2>
          </div>
          <h3 className="text-3xl font-bold">20</h3>
        </div>
        <div className="flex flex-col justify-center items-center aspect-video rounded-xl bg-white shadow-lg  p-4 ">
          <div className="flex gap-3">
            <Leaf />
            <h2 className="text-lg font-semibold">Total category</h2>
          </div>
          <h3 className="text-3xl font-bold">500</h3>
        </div>
        
      </div>
      <div className="flex-1 rounded-xl bg-white p-6 shadow-lg overflow-auto">
        <BarChart />
        {/* <h2 className="text-lg font-semibold mb-4">
          Full-Screen Content Section
        </h2>
        <p className="text-white">
          This section stretches to fill the remaining screen space. Add your
          custom content here, such as tables, graphs, or additional components.
        </p> */}
      </div>
    </div>
  );
}
