import { create } from "zustand";

interface ReportStore {
  reportData: string;
  setReportData: (data: string) => void;
  clearReportData: () => void;
}

export const useReportStore = create<ReportStore>((set) => ({
  reportData: "",
  setReportData: (data: string) => set({ reportData: data }),
  clearReportData: () => set({ reportData: "" }),
}));
