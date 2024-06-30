import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CalendarEntry, OutputEntry } from "./types";

export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(...inputs));
}

export function processCalendarData(data: CalendarEntry[]): OutputEntry[] {
  const result: OutputEntry[] = [];

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  const weekdayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
  };

  let currentMonth = "";
  let currentMonthData: string[] = [];

  for (let i = 0; i < data.length; i++) {
    const date = new Date(data[i].date);
    const month = date.toLocaleDateString("en-US", options);
    const weekday = date.toLocaleDateString("en-US", weekdayOptions);

    if (currentMonth !== month) {
      if (currentMonthData.length > 0) {
        result.push({ month: currentMonth, weekdays: currentMonthData });
      }
      currentMonth = month;
      currentMonthData = [];
    }

    currentMonthData.push(weekday);
  }

  if (currentMonthData.length > 0) {
    result.push({ month: currentMonth, weekdays: currentMonthData });
  }

  return result;
}
