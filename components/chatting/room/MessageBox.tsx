import React from 'react';
import styles from './MessageBox.module.scss';

type MessageBoxProps = {
  content: string;
  type?: string;
};
const MessageBox = ({ content, type }: MessageBoxProps) => {
  const msgClass = type === 'send' ? styles['send-box'] : styles['receive-box'];
  return (
    <div className={msgClass}>
      <div className={msgClass}>{content}</div>
    </div>
  );
};

export default MessageBox;
