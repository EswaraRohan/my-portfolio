"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalData = {
  title: string;
  description: string;
  gitUrl?: string;
  liveUrl?: string;
  techStack?: string[];
  images?: string[];
};

type ModalContextType = {
  modalData: ModalData | null;
  setModalData: (data: ModalData | null) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
};


const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalData, setModalData, open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}


export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
