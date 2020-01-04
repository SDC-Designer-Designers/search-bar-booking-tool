\c sdcsearchpostgres;

COPY bookingdate
FROM '/Users/huntertreadaway/code_projects/hack_reactor/hrla33/SDC/search-bar-booking-tool/dbhelpers/csv/bookingRecords.csv'
DELIMITER ',' CSV HEADER;

CREATE INDEX listing_id_index ON bookingdate (listing_id);