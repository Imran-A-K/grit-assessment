import { UserContextType } from "@/lib/types";
import dayjs from "dayjs";
import { createContext } from "react";

export const UserContext = createContext<UserContextType>({
  dateRange: [dayjs("2024-06-24"), dayjs("2024-08-24")],
  setDateRange: () => {},
  calendarRef: { current: null },
  suiteDetailsRef: { current: [] },
});
