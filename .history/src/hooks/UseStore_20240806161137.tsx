import create from 'zustand';

interface StoreState {
  dataMe: object[];
  setDataMe: (dataMe: object[]) => void;

  dataPeiodList: object[];
  setDataPeiodList: (dataPeiodList: object[]) => void
}

const useStore = create<StoreState>((set) => ({
  dataMe: [],
  setDataMe: (dataMe) => set({ dataMe }),
  dataPeiodList: [],
  setDataPeiodList: (dataPeiodList) => set({ dataPeiodList }),
}));

export default useStore;
