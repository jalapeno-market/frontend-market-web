import React, { useRef, useState } from "react";
import styles from "./Form.module.scss";
import Checkbox from "../common/Checkbox";
import PicIcon from "../../public/image/postForm/iconmonstr-picture-thin.svg";
import Image from "next/image";
import NewPostHeader from "../layout/header/NewPostHeader";
import { makePost } from "../../api/post";
import { useRouter } from "next/router";

const Form = () => {
  const sharingCheckbox = useRef<HTMLInputElement>(null);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isCheckedSharingBox, setIsCheckedSharingBox] = useState(false);
  const [file, setFile] = useState<File>();

  const router = useRouter();

  const submitHandler = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (
      !titleInputRef.current?.value ||
      !textareaRef.current?.value ||
      !file ||
      !priceInputRef.current?.value ||
      !fileInputRef.current?.value
    ) {
      alert("모든 값을 입력해주세요");
      return;
    }

    const formData = new FormData();
    formData.append("title", titleInputRef.current.value);
    formData.append("contents", textareaRef.current.value);
    formData.append("images", file, fileInputRef.current?.value);
    formData.append("images", "");
    formData.append("images", "");
    formData.append("price", priceInputRef.current.value);

    try {
      await makePost(formData);
      alert("게시물 업로드 성공");
      router.push("/home");
    } catch (err) {
      alert(err);
    }
  };

  const upLoadImageClickHandler = () => {
    fileInputRef.current?.click();
  };

  const addImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const files = (target.files as FileList)[0];
    if (files === undefined) {
      return;
    }
    setFile(files);
  };
  const sharingCheckboxClickHandler = () => {
    if (sharingCheckbox.current?.checked) {
      setIsCheckedSharingBox(true);
      if (priceInputRef.current) {
        priceInputRef.current.value = "0";
      }
    } else {
      setIsCheckedSharingBox(false);
      if (priceInputRef.current) {
        priceInputRef.current.value = "";
      }
    }
  };
  return (
    <>
      <NewPostHeader addPost={submitHandler} />
      <form className={styles["form"]}>
        <div className={styles["pic-container"]}>
          <>
            <div className={styles["pic-count-container"]}>
              <input
                type="file"
                style={{ display: "none" }}
                ref={fileInputRef}
                multiple
                onChange={addImageHandler}
              />
              <Image
                src={PicIcon}
                width="40"
                height="40"
                alt="upload image"
                onClick={upLoadImageClickHandler}
              />
              <div>{file ? "1/3" : "0/3"}</div>
            </div>
            {file && (
              <Image
                src={URL.createObjectURL(file)}
                width="105"
                height="105"
                alt="업로드됨"
              />
            )}
          </>
        </div>
        <input
          type="text"
          placeholder="글 제목"
          className={styles["no-border-input"]}
          ref={titleInputRef}
        ></input>
        <div className={styles["category"]}>
          <div>카테고리 선택</div>
          <div>&gt;</div>
        </div>
        <div className={styles["price"]}>
          {(isCheckedSharingBox ||
            (priceInputRef.current?.value.length !== 0 &&
              priceInputRef.current !== null)) && <div>￦</div>}
          <input
            type="number"
            placeholder="￦ 가격(선택사항)"
            className={styles["no-border-input"]}
            readOnly={isCheckedSharingBox}
            defaultValue={isCheckedSharingBox ? "0" : ""}
            ref={priceInputRef}
          ></input>
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
          className={styles["no-border-input"]}
          ref={textareaRef}
        ></textarea>
        <div>거래 희망 장소</div>
      </form>
    </>
  );
};

export default Form;
