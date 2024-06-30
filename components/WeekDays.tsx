import React from "react";

function WeekDays({ calendarData }: any) {
  return (
    <div className="flex flex-col divide-y-2">
      <p className="font-bold">{calendarData?.month}</p>
      <div className="flex divide-x-[1px] border-b-2">
        {calendarData?.weekdays.map((day: string) => (
          <div key={day} className="w-20 font-semibold text-right ">
            <p>{day.split(" ")[1]}</p>
            <p>{day.split(" ")[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekDays;
