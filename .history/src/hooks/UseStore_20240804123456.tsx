import create from 'zustand';

interface StoreState {
  dataMe: object[];
  errorMe: string;
  setDataMe: (dataMe: object[]) => void;
  setErrorMe: (errorMe: string) => void;
}

const useStore = create<StoreState>((set) => ({
  dataMe: [],
  errorMe: '',
  setData: (data) => set({ data }),
  setError: (error) => set({ error }),
}));

export default useStore;
