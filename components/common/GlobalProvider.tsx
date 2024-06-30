"use client";
import { useEffect, useRef, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { StyledEngineProvider } from "@mui/material/styles";
import { UserContext } from "./UserContext";
import dayjs, { Dayjs } from "dayjs";
import { DateRange } from "@mui/x-date-pickers-pro";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNodeAsChildrenProps } from "@/lib/types";
const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ff8000",
      dark: "#ba000d",
      contrastText: "#fff",
    },
  },
});
export default function GlobalProvider({ children }: ReactNodeAsChildrenProps) {
  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>(() => [
    dayjs("2024-06-24"),
    dayjs("2024-08-24"),
  ]);
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const suiteDetailsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <>
      <UserContext.Provider
        value={{
          dateRange,
          setDateRange,
          calendarRef,
          suiteDetailsRef,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Toaster position="bottom-right" richColors />
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </UserContext.Provider>
    </>
  );
}
