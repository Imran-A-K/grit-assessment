import { RatePlan } from "@/lib/types";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

function TableColumn({ ratePlans, calendarData, calendarIndex }: any) {
  return (
    <div
      className={cn(
        "flex flex-col divide-y-[1px] font-semibold text-right border-b-[1px] max-sm:text-sm  border-r-[1px]",
        calendarData?.status ? "divide-gray-200" : "divide-red-800"
      )}
    >
      <p
        className={cn(
          "text-white text-sm w-20 pr-2 pt-1 max-sm:text-sm",
          calendarData?.status ? "bg-green-500" : "bg-red-500"
        )}
      >
        {calendarData?.status ? "Open" : "Closed"}
      </p>
      <p
        className={cn(
          "w-20 pr-2 max-sm:text-sm",
          calendarData?.status ? "" : "bg-red-500 text-white"
          // !calendarData?.available && "text-transparent select-none"
        )}
      >
        {calendarData?.available || 0}
      </p>
      <p
        className={cn(
          "w-20 pr-2 max-sm:text-sm",
          calendarData?.status ? "" : "bg-red-500 text-white"
          // !calendarData?.booked && "text-transparent select-none"
        )}
      >
        {calendarData?.booked || 0}
      </p>
      {ratePlans.map(
        (
          ratePlan: RatePlan,

          index: React.Key | null | undefined
        ) => (
          <div
            key={index}
            className={cn(
              "flex flex-col divide-y-[1px] max-sm:text-sm",
              calendarData?.status ? "divide-gray-200" : "divide-red-800"
            )}
          >
            <p
              className={cn(
                "w-20 h-12 pr-2 max-sm:text-sm",
                calendarData?.status ? "" : "bg-red-500 text-white"
              )}
            >
              {ratePlan?.calendar[calendarIndex].rate || 0}
            </p>
            <p
              className={cn(
                "w-20 pr-2 max-sm:text-sm",
                calendarData?.status ? "" : "bg-red-500",
                ratePlan?.calendar[calendarIndex].min_length_of_stay
                  ? "text-white"
                  : "text-transparent  pointer-events-none select-none"
              )}
            >
              {ratePlan?.calendar[calendarIndex].min_length_of_stay || "none"}
            </p>
            <p
              className={cn(
                "w-20 pr-2 max-sm:text-sm",
                calendarData?.status ? "" : "bg-red-500",
                ratePlan?.calendar[calendarIndex].reservation_deadline
                  ? "text-white"
                  : "text-transparent pointer-events-none select-none"
              )}
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
