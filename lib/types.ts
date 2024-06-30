import { DateRange } from "@mui/x-date-pickers-pro";
import { Dayjs } from "dayjs";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
export interface ReactNodeAsChildrenProps {
  children: ReactNode;
}

export interface RateCalendarParams {
  start_date: string;
  end_date: string;
}

export interface UserContextType {
  dateRange: DateRange<Dayjs>;
  setDateRange: Dispatch<SetStateAction<DateRange<Dayjs>>>;
  calendarRef: React.MutableRefObject<HTMLDivElement | null>;
  suiteDetailsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export interface CalendarEntry {
  id: string;
  date: string;
  available: number;
  status: boolean;
  booked: number;
}

export interface OutputEntry {
  month: string;
  weekdays: string[];
}

export interface RatePlan {
  id: number;
  name: string;
  calendar: {
    id: string;
    date: string;
    rate: number;
    min_length_of_stay: number | null;
    reservation_deadline: number | null;
  }[];
}

export interface SuiteData {
  id: string;
  name: string;
  occupancy: number;
  inventory_calendar: CalendarEntry[];
  rate_plans: RatePlan[];
}
