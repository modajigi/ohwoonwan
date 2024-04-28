import create from 'zustand';

interface StoreState {
  selections: {
    selectBox1: string;
    selectBox2: string;
    selectBox3: string;
    selectedButton1: string; 
    selectedButton2: string; 
  };
  setSelection: (key: string, value: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  selections: {
    selectBox1: '',
    selectBox2: '',
    selectBox3: '',
    selectedButton1: '',
    selectedButton2: '',
  },
  setSelection: (key, value) => set((state) => ({
    selections: { ...state.selections, [key]: value }
  }))
}));