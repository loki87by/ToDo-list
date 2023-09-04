import { ApiObject } from "./types";

export const dataUpdater = (data: ApiObject[]): ApiObject[] => {
  return data
    .map((i /* , index */) => {
      const date = new Date();
      const string = date.toLocaleString().split(",")[0];
      const dateParts = string.split(".");
      const today = +dateParts[0];
      const rand = (arg: number) => Math.floor(Math.random() * arg);
      const startDate = new Date(
        `${+dateParts[2]}, ${+dateParts[1]}, ${rand(4) + today}`
      );
      const endMinimum = Date.parse(startDate as unknown as string);
      const endDate = new Date(rand(100) * 24 * 60 * 60 * 1000 + endMinimum);
      /* if (index < 5) {
      console.log(endDate);
    } */
      i.startDate = startDate;
      i.endDate = endDate;
      return i;
    })
    .sort((a, b) => (a.startDate > b.startDate ? 1 : -1));
};
