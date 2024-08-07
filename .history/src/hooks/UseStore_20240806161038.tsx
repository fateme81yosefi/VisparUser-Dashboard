import create from 'zustand';

interface StoreState {
  dataMe: object[];
  setDataMe: (dataMe: object[]) => void;

  dataPeiodList: object[];
  setD
}

const useStore = create<StoreState>((set) => ({
  dataMe: [],
  setDataMe: (dataMe) => set({ dataMe }),
}));

export default useStore;
