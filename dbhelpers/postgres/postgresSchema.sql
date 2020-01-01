DROP DATABASE IF EXISTS SDCsearchPostgres;

CREATE DATABASE SDCsearchPostgres
  OWNER =  postgres
  ENCODING = 'UTF8'
  CONNECTION LIMIT = 25;

\c sdcsearchpostgres;

CREATE TABLE BookingDate (
   date VARCHAR,
   available BOOLEAN NOT NULL,
   check_in BOOLEAN NOT NULL,
   rate NUMERIC(10, 2),
   check_out BOOLEAN NOT NULL,
   id serial NOT NULL
);

CREATE TABLE Listing (
  id serial NOT NULL, -- make a unique value?
  title VARCHAR,
  venue_type VARCHAR,
  bedrooms INT,
  bathrooms INT,
  sleep_capacity INT,
  square_feet INT,
  review_overview VARCHAR,
  rating NUMERIC(10, 2),
  review_number INT,
  owner VARCHAR,
  cleaning_fee NUMERIC(10, 2),
  state VARCHAR,
  city VARCHAR,
  pic VARCHAR
);