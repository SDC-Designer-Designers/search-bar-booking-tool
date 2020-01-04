// DEPRECATED, MAY COME BACK LATER //
/*
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const file = fs.createWriteStream('./dbhelpers/csv/bookingRecords.csv');

months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

datesInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

years = [2019, 2020];

dates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const csvStringifier = createCsvStringifier({
  header: [
    {id: 'id', title: 'id'},
    {id: 'date', title: 'date'},
    {id: 'available', title: 'available'},
    {id: 'check_in', title: 'check_in'},
    {id: 'rate', title: 'rate'},
    {id: 'check_out', title: 'check_out'},
    {id: 'listing_id', title: 'listing_id'},
  ]
});


let m = 1;
let i = 0;
let j = 0;
let k = 0;
let l = 1;

function writeDrain() {
  // console.log('hit the drain');
  let ok = true;
  let bookingDates = [];
  let date;

  loop1:
  for (i; i < years.length; i++) {
    if (ok) {
    for (j; j < datesInMonths.length; j++) {
      if (ok) {
      for (k; k < datesInMonths[j]; k++) {
        if (ok) {
        for (l; l < 10; l++) {
          if (ok) {
            date = years[i] + '-' + months[j] + '-' + dates[k];
            bookingDates.push({id: m, date, available: true, check_in: false, check_out: false, rate: Math.floor(Math.random() * 750 + 50), listing_id: l});
            if (m % 50 === 0) {
              console.log(m)
            }
            ok = file.write(csvStringifier.stringifyRecords(bookingDates))
            m++;
          } else {
            break loop1;
          }
        }
        } else {
          break loop1;
        }
      }
      } else {
        break loop1;
      }
    }
    } else {
      break loop1;
    }
  }
  if (!ok) {
    // console.log('not ok');
    file.once('drain', writeDrain);
  }
}

file.write(csvStringifier.getHeaderString()); // writes the csv header row
writeDrain();
console.log('done writing bookings to csv');
*/