"use client"

import { useState } from 'react';

import { useStore } from '@/store/store';

// component
import SelectBox from '@/components/commons/SelectBox';
import Button from '@/components/commons/Button';

const Footer = () => {
  const { setSelection } = useStore();

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: currentYear - 1950 + 1}, (_, i) => `${1950 + i}년`); // 1950년부터 현재 연도까지
  const months = Array.from({length: 12}, (_, i) => `${i + 1}월`);
  const days = Array.from({length: 31}, (_, i) => `${i + 1}일`);

  const [selectBox1Value, setSelectBox1Value] = useState("");
  const [selectBox2Value, setSelectBox2Value] = useState(""); 
  const [selectBox3Value, setSelectBox3Value] = useState("");
  const [selectBox4Value, setSelectBox4Value] = useState("");

  const handleSelectChange = (value, setter, selectName) => {
    setter(value);
    setSelection(selectName, value);
  }

  return (
    <footer className="sticky bottom-0 flex flex-col items-center h-auto space-y-4">
      <SelectBox
        options={years.map(String)}
        value={selectBox2Value}
        placeholder="출생년"
        onChange={(e) => handleSelectChange(e.target.value, setSelectBox2Value, 'selectBox2')}
      />
      <SelectBox
        options={months}
        value={selectBox3Value}
        placeholder="출생월"
        onChange={(e) => {
          setSelectBox3Value(e.target.value);
          setSelection('selectBox3', e.target.value);
        }}
      />
      <SelectBox
        options={days}
        value={selectBox4Value}
        placeholder="출생일"
        onChange={(e) => handleSelectChange(e.target.value, setSelectBox4Value, 'selectBox4')}
      />
      <div className="flex space-x-2">
        <Button label="앙력" onClick={() => setSelection('selectedButton1', '앙력')} />
        <Button label="음력" onClick={() => setSelection('selectedButton1', '음력')} />
      </div>
      <div className="flex space-x-2">
        <Button label="여성" onClick={() => setSelection('selectedButton2', '여성')} />
        <Button label="남성" onClick={() => setSelection('selectedButton2', '남성')} />
      </div>
    </footer>
  );
};

export default Footer;
