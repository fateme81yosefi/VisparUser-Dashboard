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
  setDataMe: (dataMe) => set({ data }),
  setErrorMe: (errorMe) => set({ errorMe }),
}));

export default useStore;
