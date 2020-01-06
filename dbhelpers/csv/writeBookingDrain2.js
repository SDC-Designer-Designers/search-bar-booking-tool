const createCsvStringifier = require('csv-writer').createArrayCsvStringifier;
const fs = require('fs');
const file = fs.createWriteStream('./dbhelpers/csv/bookingRecords.csv', {'flags': 'a'});

months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

datesInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

years = [2019, 2020];

dates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const csvStringifier = createCsvStringifier({
  header: [
    'id', 'date', 'available', 'check_in', 'rate', 'check_out', 'listing_id'
  ]
});

let bookingDates = []
let date;

let m = 2500001;

const generateBookingDates = async (listStart, listEnd) => {
  for (let h = 0; h < years.length; h++) {
    for (let j = 0; j < datesInMonths.length; j++) {
      for (let k = 0; k < datesInMonths[j]; k++) {
        for (let l = listStart; l <= listEnd; l++) {
          try {
            date = years[h] + '-' + months[j] + '-' + dates[k];
            await bookingDates.push([[m, date, true, false, Math.floor(Math.random() * 750 + 50), false, l]]);
            if (m % 5000 === 0) {
              console.log(m)
            }
            m++;
          }
          catch (error) {
            console.error(error);
          }
        }
      }
    }
  }
}

let i = 0;

const writeDrain = () => {
  let ok = true;
  for (i; i < 2500000; i++) {
    if (ok) {
      ok = file.write(csvStringifier.stringifyRecords(bookingDates[i]))
    } else {
      break;
    }
  }
  if (!ok) {
    file.once('drain', writeDrain)
  }
}

const createAndWrite = async () => {
  await generateBookingDates(3426, 6850);
  writeDrain();
}

createAndWrite();