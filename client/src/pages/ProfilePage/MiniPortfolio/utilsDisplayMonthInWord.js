export function displayMonthInWord(month) {
  let word = " ";

  switch (month) {
    case 1:
      word = "Jan.";
      break;

    case 2:
      word = "Feb.";
      break;

    case 3:
      word = "Mar.";
      break;

    case 4:
      word = "Apr.";
      break;

    case 5:
      word = "May.";
      break;

    case 6:
      word = "Jun.";
      break;

    case 7:
      word = "Jul.";
      break;

    case 8:
      word = "Aug.";
      break;

    case 9:
      word = "Sep.";
      break;

    case 10:
      word = "Oct.";
      break;

    case 11:
      word = "Nov.";
      break;

    case 12:
      word = "Dec.";
      break;

    default:
      word = "Null";
      break;
  }
  return word;
}
