import { create } from "zustand";

export interface AuthStoreType {
  authData: {
    pToken?: string | undefined;
    sToken?: string | undefined;
  };
  initAuthData: () => void;
  changePocketToken: (pToken: string) => void;
  changeSelfToken: (sToken: string) => void;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  authData: {},
  changePocketToken: (pToken: string) =>
    set((state) => ({ authData: { ...state.authData, pToken } })),
  initAuthData: () =>
    set((state) => ({
      authData: {
        ...state.authData,
        pToken: localStorage.getItem("pToken") || "",
      },
    })),
  changeSelfToken: (sToken: string) =>
    set((state) => ({ authData: { ...state.authData, sToken } })),
}));
