const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');
const file = fs.createWriteStream('./dbhelpers/postgres/csv/postgresBookingRecords.csv');

months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

datesInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

years = [2019, 2020];

dates = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const csvStringifier = createCsvStringifier({
  header: [
    {id: 'date', title: 'DATE'},
    {id: 'available', title: 'AVAILABLE'},
    {id: 'check_in', title: 'CHECK_IN'},
    {id: 'rate', title: 'RATE'},
    {id: 'check_out', title: 'CHECK_OUT'},
    {id: 'listing_id', title: 'LISTING_ID'},
  ]
});

generateBookingDates= async (listing_id) => {
  try {
    let bookingDates = [];
    let date;
    for (let i = 0; i < years.length; i++) {
      for (let j = 0; j < datesInMonths.length; j++) {
        for (let k = 0; k < datesInMonths[j]; k++) {
          for (let l = 1; l < 101; l++) {
            date = years[i] + '-' + months[j] + '-' + dates[k];
            // date = '2020-09-17';
            bookingDates.push({date, available: true, check_in: false, check_out: false, rate: Math.floor(Math.random() * 750 + 50), listing_id: l});
          }
        }
      }
    }
    await db.connect();
    console.log('successfully connected to postgres db');
    for (var i = 0; i < bookingDates.length; i++) {
      await db.query(`INSERT INTO bookingdate (date, available, check_in, rate, check_out, listing_id) VALUES (${bookingDates[i]['date']}, ${bookingDates[i]['available']}, ${bookingDates[i]['check_in']}, ${bookingDates[i]['rate']}, ${bookingDates[i]['check_out']}, ${bookingDates[i]['listing_id']})`)
      console.log(i);
    }
  } catch (error) {
    console.error(error)
  } finally {
    await db.end();
    console.log('connection to PG DB terminated');
  }
};