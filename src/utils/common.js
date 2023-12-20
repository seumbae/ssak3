export function getColor(val) {
  switch (val) {
    case '외식':
      return 'cat1';
    case '배달':
      return 'cat2';
    case '배달음식':
      return 'cat3';
    case '점심':
      return 'cat4';
    case '저녁':
      return 'cat5';
    case '야식':
      return 'cat6';
    default:
      return 'cat6';
  }
}
