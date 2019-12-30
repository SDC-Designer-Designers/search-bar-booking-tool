\c sdcsearchpostgres;

COPY booking <--- check this table name
FROM '/Users/huntertreadaway/code_projects/hack_reactor/hrla33/SDC/search-bar-booking-tool/dbhelpers/postgres/csv/postgresBookingRecords.csv'
DELIMITER ',' CSV HEADER;