import { create } from "zustand";

export const useStore = create((set) => ({
  estado: {
    usuario: "estado",
    avatar: "",
  },
  cambiarEstado: (newState) => set({ estado: newState }),
}));
