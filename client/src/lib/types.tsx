import type { ReactNode } from "react";

export type programType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export type Category = {
  id: number;
  name: string;
};

export type CategoryData = {
  name: string;
};

export type CategoryFormProps = {
  children: ReactNode;
  defaultValue: CategoryData;
  onSubmit: (category: CategoryData) => void;
  id: number;
};
export type CategoryDeleteFormProps = {
  children: ReactNode;
  id: number;
};
