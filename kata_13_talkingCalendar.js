const talkingCalendar = function (date) {

  let outputString = '';
  let month = '';
  let day = '';
  let daySuffix = '';
  const year = date.slice(0, 4);

  // Assigns correct name of month to variable based on input
  switch (date.slice(5, 7)) {
    case '01': month = 'January';
      break;
    case '02': month = 'February';
      break;
    case '03': month = 'March';
      break;
    case '04': month = 'April';
      break;
    case '05': month = 'May';
      break;
    case '06': month = 'June';
      break;
    case '07': month = 'July';
      break;
    case '08': month = 'August';
      break;
    case '09': month = 'September';
      break;
    case '10': month = 'October';
      break;
    case '11': month = 'November';
      break;
    case '12': month = 'December';
      break;
  }

  // Removes leading 0 from single digit days and assigns to variable
  if (date[8] === '0') {
    day = date[9];
  }
  else day = date.slice(8, 10);

  // Assigns correct suffix for the day of the month
  if (date[9] === '1' && date[8] === '0') {
    daySuffix = 'st';
  }
  else if (date[9] === '2') {
    daySuffix = 'nd';
  }
  else if (date[9] === '3') {
    daySuffix = 'rd';
  }
  else daySuffix = 'th';

  // Assembles output
  outputString = `${month} ${day}${daySuffix}, ${year}`;
  return outputString;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
