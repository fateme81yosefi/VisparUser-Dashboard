import create from 'zustand';

interface StoreState {
  dataMe: object[];
  setDataMe: (dataMe: object[]) => void;

  dataPeriodList: object[];
  setDataPeriodList: (dataPeriodList: object[]) => void
}

const useStore = create<StoreState>((set) => ({

  dataMe: [],
  setDataMe: (dataMe) => set({ dataMe }),

  dataPeriodList: [],
  setDataPeriodList: (dataPeriodList) => set({ dataPeriodList }),

}));

export default useStore;
