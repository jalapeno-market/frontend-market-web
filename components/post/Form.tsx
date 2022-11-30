import React, { useRef, useState } from 'react';
import styles from './Form.module.scss';
import Checkbox from '../common/Checkbox';
import PicIcon from '../../public/image/postForm/iconmonstr-picture-thin.svg';
import Image from 'next/image';

const Form = () => {
  const [isCheckedSharingBox, setIsCheckedSharingBox] = useState(false);
  const sharingCheckbox = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const sharingCheckboxClickHandler = () => {
    if (sharingCheckbox.current?.checked) {
      setIsCheckedSharingBox(true);
      if (priceInputRef.current) {
        priceInputRef.current.value = '0';
      }
    } else {
      setIsCheckedSharingBox(false);
      if (priceInputRef.current) {
        priceInputRef.current.value = '';
      }
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles['form']}>
      <div className={styles['pic-container']}>
        <div className={styles['pic-count-container']}>
          <Image src={PicIcon} width="40" height="40" alt="upload image" />
          <div>0/10</div>
        </div>
      </div>
      <input
        type="text"
        placeholder="글 제목"
        className={styles['no-border-input']}
      />
      <div className={styles['category']}>
        <div>카테고리 선택</div>
        <div>&gt;</div>
      </div>
      <div className={styles['price']}>
        {(isCheckedSharingBox ||
          (priceInputRef.current?.value.length !== 0 &&
            priceInputRef.current !== null)) && <div>￦</div>}
        <input
          type="number"
          placeholder="￦ 가격(선택사항)"
          className={styles['no-border-input']}
          readOnly={isCheckedSharingBox}
          defaultValue={isCheckedSharingBox ? '0' : ''}
          ref={priceInputRef}
        />
        <Checkbox
          id="sharing"
          label="나눔"
          inputRef={sharingCheckbox}
          onClick={sharingCheckboxClickHandler}
        />
      </div>
      <Checkbox id="price-offer" label="가격 제안받기" />
      <textarea
        placeholder="게시글 내용을 작성해주세요"
        className={styles['no-border-input']}
      />
      <div>거래 희망 장소</div>
    </form>
  );
};

export default Form;
