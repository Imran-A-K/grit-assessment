"use client";
import React from "react";
import { getRateCalendarData } from "@/lib/ApiKit";
import { useDate } from "@/lib/hooks/useDate";
import { processCalendarData } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import WeekDays from "./WeekDays";
import SuiteDetails from "./SuiteDetails";
import { SuiteData } from "@/lib/types";
function RoomCategory() {
  const { dateRange, calendarRef, suiteDetailsRef } = useDate();
  const startDate = dateRange[0]?.format("YYYY-MM-DD") || "";
  const endDate = dateRange[1]?.format("YYYY-MM-DD") || "";

  const { isLoading, data = [] } = useQuery({
    queryKey: ["rateCalendarData", startDate, endDate],
    queryFn: () =>
      getRateCalendarData({
        start_date: startDate,
        end_date: endDate,
      }).then(({ data }) => data.data),
  });
  const canaryDeluxDouble = processCalendarData(
    data[0]?.inventory_calendar || []
  );
  if (isLoading) return;
  return (
    <section className="bg-white flex flex-col w-full rounded-md pr-2">
      <div
        className="grid relative grid-cols-[1fr_3fr] divide-x-2 divide-gray-200
       w-full"
      >
        <div className=" h-full row-start-1 border-b-[1px]" />
        <div
          ref={calendarRef}
          className="flex divide-x-2  divide-gray-200 overflow-x-scroll [&::-webkit-scrollbar]:h-3  [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent [&:hover::-webkit-scrollbar-thumb]:bg-gray-500"
          onScroll={(e: React.UIEvent<HTMLDivElement>) => {
            if (suiteDetailsRef.current) {
              const target = e.target as HTMLDivElement;
              suiteDetailsRef.current.forEach((ref) => {
                if (ref instanceof HTMLDivElement) {
                  ref.scrollLeft = target.scrollLeft;
                }
              });
            }
          }}
        >
          {canaryDeluxDouble.map((calendarData) => (
            <WeekDays calendarData={calendarData} key={crypto.randomUUID()} />
          ))}
        </div>
      </div>

      {!isLoading &&
        data.map((suiteData: SuiteData) => (
          <SuiteDetails key={crypto.randomUUID()} suiteData={suiteData} />
        ))}
    </section>
  );
}

export default RoomCategory;
