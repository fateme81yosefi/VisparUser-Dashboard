import create from 'zustand';

interface StoreState {
  dataMe: object[];
  setDataMe: (dataMe: object[]) => void;

  dataPeriodList: object[];
  setDataPeiodList: (dataPeiodList: object[]) => void
}

const useStore = create<StoreState>((set) => ({

  dataMe: [],
  setDataMe: (dataMe) => set({ dataMe }),

  dataPeriodList: [],
  setDataPeiodList: (dataPeriodList) => set({ dataPeiodList }),

}));

export default useStore;
