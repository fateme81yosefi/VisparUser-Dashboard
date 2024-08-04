import create from 'zustand';

interface StoreState {
  dataMe: object[];
  erroMer: string;
  setDataMe: (data: object[]) => void;
  setError: (error: string) => void;
}

const useStore = create<StoreState>((set) => ({
  data: [],
  error: '',
  setData: (data) => set({ data }),
  setError: (error) => set({ error }),
}));

export default useStore;
