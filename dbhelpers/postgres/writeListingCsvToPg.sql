\c sdcsearchpostgres;

COPY listing
FROM '/Users/huntertreadaway/code_projects/hack_reactor/hrla33/SDC/search-bar-booking-tool/dbhelpers/csv/listingRecords.csv'
DELIMITER ',' CSV HEADER;