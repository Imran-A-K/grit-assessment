// import React from "react";

// function WeekDays({ calendarData }: any) {
//   return (
//     <div className="flex flex-col divide-y-2 select-none">
//       <p className="font-bold">{calendarData?.month}</p>
//       <div className="flex divide-x-[1px] border-b-2">
//         {calendarData?.weekdays.map((day: string) => (
//           <div key={day} className="w-20 font-semibold text-right ">
//             <p>{day.split(" ")[1]}</p>
//             <p>{day.split(" ")[0]}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default WeekDays;

import React from "react";
import { Box, Typography, Divider } from "@mui/material";

function WeekDays({ calendarData }: any) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", userSelect: "none" }}>
      <Typography sx={{ fontWeight: "bold" }}>{calendarData?.month}</Typography>
      <Box
        sx={{
          display: "flex",
          borderBottom: 1,
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        {calendarData?.weekdays.map((day: string, index: number) => (
          <Box
            key={day}
            sx={{
              width: 80,
              textAlign: "right",

              borderRight:
                index < calendarData.weekdays.length - 1
                  ? "1px solid #e0e0e0"
                  : "none",
              paddingRight: 1,
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              {day.split(" ")[1]}
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {day.split(" ")[0]}
            </Typography>
          </Box>
        ))}
      </Box>
      <Divider />
    </Box>
  );
}

export default WeekDays;
