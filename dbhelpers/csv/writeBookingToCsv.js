const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const file = fs.createWriteStream('./dbhelpers/csv/bookingRecords.csv');

months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

datesInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

years = [2019, 2020];

dates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const csvStringifier = createCsvStringifier({
  header: [
    {id: 'id', title: 'ID'},
    {id: 'date', title: 'DATE'},
    {id: 'available', title: 'AVAILABLE'},
    {id: 'check_in', title: 'CHECK_IN'},
    {id: 'rate', title: 'RATE'},
    {id: 'check_out', title: 'CHECK_OUT'},
    {id: 'listing_id', title: 'LISTING_ID'},
  ]
});

const writeToCsv = async () => {
  let bookingDates = [];
  let date;
  const generateBookingDates = () => {
    let m = 1;
    for (let i = 0; i < years.length; i++) {
      for (let j = 0; j < datesInMonths.length; j++) {
        for (let k = 0; k < datesInMonths[j]; k++) {
          for (let l = 1; l < 13700; l++) {
            date = years[i] + '-' + months[j] + '-' + dates[k];
            bookingDates.push({id: m, date, available: true, check_in: false, check_out: false, rate: Math.floor(Math.random() * 750 + 50), listing_id: l});
            console.log(m); // log which record number currently working
            m++; // increment record number
            if (m % 5000 === 0) {
              console.log(m)
            }
          }
        }
      }
    }
  }
  await generateBookingDates();
  await file.write(csvStringifier.stringifyRecords(bookingDates));
}

const writeAll = async () => {
  await writeToCsv();
  console.log('done writing bookings to csv');
}

file.write(csvStringifier.getHeaderString()); // writes the csv header row
writeAll();