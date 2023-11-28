import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// type OptionsStore = {
//   infinity: boolean;
//   setInfinity: () => void;
// };

export type OptionsValues = {
  infinity: boolean;
};

type OptionsStore = OptionsValues & {
  setInfinity: () => void;
};

export const useOptionsStore = create<OptionsStore>()(
  persist(
    (set, get) => ({
      infinity: false,
      setInfinity: () => set((state) => ({ infinity: !state.infinity })),
    }),
    {
      name: 'infinity-scroll',
      storage: createJSONStorage(() => localStorage),
    }
  )
)