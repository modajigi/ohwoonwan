import create from 'zustand';

interface StoreState {
  selections: {
    selectBox1: string;
    selectBox2: string;
    selectBox3: string;
    selectedButton: string; // 버튼 선택 상태
  };
  setSelection: (key: string, value: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  selections: {
    selectBox1: '',
    selectBox2: '',
    selectBox3: '',
    selectedButton: ''
  },
  setSelection: (key, value) => set((state) => ({
    selections: { ...state.selections, [key]: value }
  }))
}));