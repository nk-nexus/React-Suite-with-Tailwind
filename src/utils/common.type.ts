import { ReactNode } from "react";

export type TFCProps = {
  children: ReactNode;
};

export type TRecordState = Record<string, any>

export type TChildComponent = {
  callback: (data: TRecordState) => void
}