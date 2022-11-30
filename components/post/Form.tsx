import React, { useRef, useState } from 'react';
import styles from './Form.module.scss';
import Checkbox from '../common/Checkbox';
import PicIcon from '../../public/image/postForm/iconmonstr-picture-thin.svg';

const Form = () => {
  const [isCheckedSharingBox, setIsCheckedSharingBox] = useState(false);
  const sharingCheckbox = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const sharingCheckboxClickHandler = () => {
    if (sharingCheckbox.current?.checked) {
      setIsCheckedSharingBox(true);
    } else {
      setIsCheckedSharingBox(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles['form']}>
      <div className={styles['pic-container']}>사진 업로드 부분</div>
      <input
        type="text"
        placeholder="글 제목"
        className={styles['no-border-input']}
      ></input>
      <div className={styles['category']}>
        <div>카테고리 선택</div>
        <div>&gt;</div>
      </div>
      <div className={styles['price']}>
        {!isCheckedSharingBox && (
          <input
            type="number"
            placeholder="￦ 가격(선택사항)"
            className={styles['no-border-input']}
          ></input>
        )}
        {isCheckedSharingBox && <div>￦ 0</div>}
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
      ></textarea>
      <div>거래 희망 장소</div>
    </form>
  );
};

export default Form;
