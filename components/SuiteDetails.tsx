"use client";
import { Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import TableColumn from "./TableColumn";
import { useDate } from "@/lib/hooks/useDate";
import { IoMdPerson } from "react-icons/io";
function SuiteDetails({ suiteData }: any) {
  const { calendarRef, suiteDetailsRef } = useDate();
  const particularSuiteRef = useRef(null);

  useEffect(() => {
    suiteDetailsRef.current.push(particularSuiteRef.current);
  }, []);
  return (
    <div
      className="grid grid-cols-[1fr_3fr]
     divide-gray-200"
    >
      <p className="font-semibold text-lg pl-3 py-3">{suiteData?.name}</p>
      <div className="grid grid-cols-3 py-3">
        <div className="flex items-center justify-center col-start-3">
          <Button variant="contained" color="secondary">
            + Bulk Edit
          </Button>
        </div>
      </div>
      <div className="flex flex-col divide-y-[1px] border-r-[1px] pl-3">
        <p className="font-medium">Room status</p>
        <p className="font-medium">Room to sell</p>
        <p className="font-medium">Net booked</p>
        {suiteData?.rate_plans?.map((rates: any) => (
          <div
            key={crypto.randomUUID()}
            className="flex flex-col divide-y-[1px]"
          >
            <div className="font-medium flex flex-col">
              <p className="">{rates?.name}</p>

              <p className=" text-blue-500 pl-3 flex gap-2 items-center ">
                <IoMdPerson className="h-4 w-4" /> x {suiteData?.occupancy}
              </p>
            </div>

            <p className="font-medium">Min length of stay</p>
            <p className="font-medium">Min advance reservation</p>
          </div>
        ))}
        <div />
      </div>
      <div
        ref={particularSuiteRef}
        className="flex col-start-2 overflow-x-scroll  [&::-webkit-scrollbar]:hidden"
        onScroll={(e: React.UIEvent<HTMLDivElement>) => {
          const target = e.target as HTMLDivElement;
          if (calendarRef.current) {
            calendarRef.current.scrollLeft = target.scrollLeft;
          }
          if (suiteDetailsRef.current) {
            suiteDetailsRef.current.forEach(
              (ref: { scrollLeft: number } | null) => {
                if (ref && ref !== particularSuiteRef.current) {
                  ref.scrollLeft = target.scrollLeft;
                }
              }
            );
          }
        }}
      >
        {suiteData?.inventory_calendar?.map((calendarData: any, index: any) => (
          <TableColumn
            ratePlans={suiteData?.rate_plans}
            calendarData={calendarData}
            calendarIndex={index}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
    </div>
  );
}

export default SuiteDetails;
