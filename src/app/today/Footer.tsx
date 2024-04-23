"use client"

import SelectBox from '@/components/commons/SelectBox';
import Button from '@/components/commons/Button';
import { useStore } from '@/store/store';

const Footer = () => {
  const { setSelection } = useStore();
  const options1 = ['양력', '음력'];
  const options2 = ['옵션 2A', '옵션 2B', '옵션 2C'];
  const options3 = ['옵션 3A', '옵션 3B', '옵션 3C'];

  return (
    <footer className="sticky bottom-0 flex flex-col items-center h-auto space-y-4">
      <SelectBox
        options={options1}
        onChange={(e) => setSelection('selectBox1', e.target.value)}
      />
      <SelectBox
        options={options2}
        onChange={(e) => setSelection('selectBox2', e.target.value)}
      />
      <SelectBox
        options={options3}
        onChange={(e) => setSelection('selectBox3', e.target.value)}
      />
      <div className="flex space-x-2">
        <Button label="A" onClick={() => setSelection('selectedButton', 'A')} />
        <Button label="B" onClick={() => setSelection('selectedButton', 'B')} />
      </div>
    </footer>
  );
};

export default Footer;
