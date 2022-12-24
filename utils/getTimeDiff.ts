export const getTimeDiff = (timeString: string) => {
  const start = new Date(timeString);
  const end = new Date();
  console.log(start.getTime());
  console.log(end.getTime());

  const diffYear = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30 * 12)
  );

  if (diffYear) {
    return `${diffYear}년 전`;
  }

  const diffMonth = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30)
  );
  if (diffMonth) {
    return `${diffMonth}개월 전`;
  }

  const diffDay = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diffDay) {
    return `${diffDay}일 전`;
  }

  const diffHour = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60)
  );
  if (diffHour) {
    return `${diffHour}시간 전`;
  }

  const diffMinute = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60)
  );
  if (diffMinute) {
    return `${diffMinute}분 전`;
  }

  const diffSecond = Math.floor((end.getTime() - start.getTime()) / 1000);
  if (diffMinute) {
    return `${diffSecond}초 전`;
  }

  return "방금";
};
