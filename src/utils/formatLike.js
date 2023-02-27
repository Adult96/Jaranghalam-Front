export default function formatLike(count) {
  const cntToNum = Number(count);
  if (cntToNum > 100000000) {
    const cnt = cntToNum / 100000000;
    if (Number.isInteger(cnt)) {
      return `좋아요 ${cntToNum / 100000000}억개`;
    }
    return `좋아요 ${(cntToNum / 100000000).toFixed(1)}억개`;
  }
  if (cntToNum >= 10000) {
    const cnt = cntToNum / 10000;
    if (Number.isInteger(cnt)) {
      return `좋아요 ${cntToNum / 10000}만개`;
    }
    return `좋아요 ${(cntToNum / 10000).toFixed(1)}만개`;
  }

  return `좋아요 ${Math.round(cntToNum)}개`;
}
