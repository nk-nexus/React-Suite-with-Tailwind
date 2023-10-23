import { ReactNode } from "react";

export type AppProviderProps  = {
  children: ReactNode;
};

export type AppComponentProps<T> = {
  props: T
}

export type TRecordState = Record<string, any>

export type TChildComponent = {
  callback: (data: TRecordState) => void
}