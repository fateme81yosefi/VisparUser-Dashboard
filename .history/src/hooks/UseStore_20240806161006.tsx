import create from 'zustand';

interface StoreState {
  dataMe: object[];
  setDataMe: (dataMe: object[]) => void;
}

const useStore = create<StoreState>((set) => ({
  dataMe: [],
  errorMe: '',
  setDataMe: (dataMe) => set({ dataMe }),
  setErrorMe: (errorMe) => set({ errorMe }),
}));

export default useStore;