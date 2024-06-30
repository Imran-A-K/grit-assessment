import { RatePlan } from "@/lib/types";
import React, { ReactNode } from "react";

function TableColumn({ ratePlans, calendarData, calendarIndex }: any) {
  return (
    <div
      className={`flex flex-col divide-y-[1px] font-semibold text-right border-b-[1px]  border-r-[1px] ${
        calendarData?.status ? "divide-gray-200" : "divide-red-800"
      }`}
    >
      <p
        className={`${
          calendarData?.status ? "bg-green-500" : "bg-red-500"
        } text-white text-sm w-20 pr-2 pt-1`}
      >
        {calendarData?.status ? "Open" : "Closed"}
      </p>
      <p
        className={`w-20 pr-2    ${
          calendarData?.status ? "" : "bg-red-500 text-white"
        }`}
      >
        {calendarData?.available}
      </p>
      <p
        className={`w-20 pr-2    ${
          calendarData?.status ? "" : "bg-red-500 text-white"
        }`}
      >
        {calendarData?.booked}
      </p>
      {ratePlans.map(
        (
          ratePlan: RatePlan,

          index: React.Key | null | undefined
        ) => (
          <div
            className={`flex flex-col divide-y-[1px] ${
              calendarData?.status ? "divide-gray-200" : "divide-red-800"
            }`}
            key={index}
          >
            <p
              className={`w-20 h-12 pr-2    ${
                calendarData?.status ? "" : "bg-red-500 text-white"
              }`}
            >
              {ratePlan?.calendar[calendarIndex].rate}
            </p>
            <p
              className={`w-20 pr-2    ${
                calendarData?.status ? "" : "bg-red-500 "
              } ${
                ratePlan?.calendar[calendarIndex].min_length_of_stay
                  ? "text-white"
                  : "text-transparent  pointer-events-none select-none"
              }`}
            >
              {ratePlan?.calendar[calendarIndex].min_length_of_stay || "none"}
            </p>
            <p
              className={`w-20 pr-2     ${
                calendarData?.status ? "" : "bg-red-500"
              } ${
                ratePlan?.calendar[calendarIndex].reservation_deadline
                  ? "text-white"
                  : "text-transparent pointer-events-none select-none"
              }`}
            >
              {ratePlan?.calendar[calendarIndex].reservation_deadline || "none"}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default TableColumn;
