// utils/format.ts
import dayjs from "dayjs";

export const formatNumber = (value: number | undefined | null): string => {
  if (typeof value !== "number" || isNaN(value)) return "0";
  return value.toLocaleString();
};

export const formatDate = (date: string, format?: string) => {
  return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
};
