"use client";
import { Bug} from "lucide-react";

function page() {
    const data = [1,2,3,4,5,6,7,8]
  return (
    <div className="flex flex-1 flex-col gap-6 p-6 bg-[#dedeff38] ">
      <div className="grid gap-6 md:grid-cols-3  p-6 rounded-xl">
        <div className="flex flex-col justify-center items-center aspect-video rounded-xl bg-white shadow-lg  p-4 ">
          <div className="flex gap-3">
            <Bug />
            <h2 className="text-lg font-semibold">Total Product Reports</h2>
          </div>
          <h3 className="text-3xl font-bold">20</h3>
        </div>
      </div>
      {/* reported products */}
      <div className="flex flex-col gap-6 max-h-[33rem] overflow-y-auto py-5 px-5">
      {data?.map(() => (
        <>
      <div className="flex-1 flex rounded-xl align-middle justify-between bg-white p-6 shadow-lg">   
        <h1 className="font-serif">Product Name</h1>
        <div className="flex gap-3">
        <button className="bg-red-500 text-white p-2 rounded-lg">Delete Product</button>
        </div>
      </div>
        </>
      ))}
      </div>
    </div>
  )
}

export default page