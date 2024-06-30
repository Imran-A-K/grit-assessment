import client from "./HttpKit";
import { RateCalendarParams } from "./types";

export const getRateCalendarData = (params: RateCalendarParams) => {
  const url = "/property/1/room/rate-calendar/assessment";
  return client.get(url, { params });
};
