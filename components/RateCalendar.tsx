"use client";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import CustomDateRangeField from "./common/CustomStyledDateRangedField";
import { useDate } from "@/lib/hooks/useDate";

function RateCalendar() {
  const { dateRange, setDateRange } = useDate();

  return (
    <section className="bg-white p-4 w-full space-y-4 rounded-md flex flex-col">
      <p className="font-medium">Rate Calendar</p>

      <CustomDateRangeField
        value={dateRange}
        onChange={(newValue: any) => setDateRange(newValue)}
      />
    </section>
  );
}

export default RateCalendar;
