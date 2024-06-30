import React from "react";
import dayjs, { Dayjs } from "dayjs";

import { styled } from "@mui/material/styles";
import {
  SingleInputDateRangeField,
  SingleInputDateRangeFieldProps,
} from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SingleInputDateRangeFieldSlotProps } from "@mui/x-date-pickers-pro/SingleInputDateRangeField/SingleInputDateRangeField.types";

const CustomStyledDateRangeField = styled(SingleInputDateRangeField)(
  ({ theme }) => ({
    width: "45%",
    maxWidth: "400px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0056b3",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#003865",
    },
  })
);

// interface CustomStyledDateRangeFieldProps
//   extends SingleInputDateRangeFieldProps<Dayjs> {}

interface CustomStyledDateRangeFieldProps {
  [key: string]: any;
}

export default function CustomDateRangeField(
  props: CustomStyledDateRangeFieldProps
) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomStyledDateRangeField {...props} />
    </LocalizationProvider>
  );
}
