import { faker } from '@faker-js/faker';
import { ApiObject, DateOptions } from "./types";

const options: DateOptions = {
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

export const dataUpdater = (data: ApiObject[]): ApiObject[] => {
  return data
    .map((i) => {
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
      const description = faker.lorem.text()
      i.startDate = startDate;
      i.endDate = endDate;
      i.description = description
      return i;
    })
    .sort((a, b) => (a.startDate > b.startDate ? 1 : -1));
};

export const dateHandler = (date: Date): string => {
  return date.toLocaleDateString("en-US", options);
};

export const capitalizer = (str: string): string => {
  const words = str.split(' ')
  const firstWord = words[0]
  const letters = firstWord.split('')
  const capitalizeFirst = letters[0].toUpperCase()
  const newFirstWord = `${capitalizeFirst}${letters.slice(1).join('')}`
  const total = `${newFirstWord}${words.slice(1).join(' ')}`
  return total
}
