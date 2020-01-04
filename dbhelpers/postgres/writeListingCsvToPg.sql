\c sdcsearchpostgres;

COPY listing
FROM '/Users/huntertreadaway/code_projects/hack_reactor/hrla33/SDC/search-bar-booking-tool/dbhelpers/csv/listingRecords.csv'
DELIMITER ',' CSV HEADER;

CREATE INDEX listing_title_index ON listing (title varchar_pattern_ops);
CREATE INDEX listing_state_index ON listing (state varchar_pattern_ops);
CREATE INDEX listing_city_index ON listing (city varchar_pattern_ops);
CREATE INDEX listing_table_id_index ON listing (id);