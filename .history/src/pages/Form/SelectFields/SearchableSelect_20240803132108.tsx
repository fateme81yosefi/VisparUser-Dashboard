import React, { useState } from 'react';
import Select from 'react-select';
import './SelectedFields.css';

interface OptionType {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: OptionType[];
  value: OptionType | null;
  onChange: (option: OptionType | null) => void;
  myPlaceHolder: string;
  myClass: string;
}

const noOptionsMessage = () => (
  <div style={{ padding: '4px', textAlign: 'right' }}>
    آپشنی وجود ندارد
  </div>
);

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  myPlaceHolder,
  myClass,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // اضافه کردن state برای modal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>باز کردن مدال</button>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* محتوای مدال */}
            <h2>مدال</h2>
            <button onClick={closeModal}>بستن</button>
          </div>
        </div>
      )}
      <Select
        options={options}
        value={value}
        onChange={onChange}
        isSearchable
        placeholder={myPlaceHolder}
        className={myClass}
        noOptionsMessage={noOptionsMessage}
        menuPortalTarget={document.body} // قرار دادن منو در body
        styles={{
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999, // تنظیم z-index برای منوی انتخاب
            direction: 'rtl',
          }),
        }}
      />
    </div>
  );
};

export default SearchableSelect;
