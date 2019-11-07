/* TO CREATE DATABASE OPEN PSQL(SHELL), ENTER THROUGH SETTINGS PW(TEST) */

/* CREATE DATABASE drtsdbv2; */
/* \c drtsdbv2; (to connect to DB) */
/* \dt; (lists tables) */

CREATE TABLE users (
  u_id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255) UNIQUE,
  email_verified BOOLEAN,
  pw_hash VARCHAR(100),
  created_timesamp TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);

CREATE TABLE leagues (
  l_id SERIAL PRIMARY KEY,
  league_name VARCHAR(255) NOT NULL UNIQUE,
  fixture_dow VARCHAR(9) NOT NULL,
  logo VARCHAR(255),
  league_active INT DEFAULT 0
);

INSERT INTO leagues (league_name, fixture_dow) VALUES ('PADDL', 'FRIDAY');

CREATE TABLE seasons (
  s_id SERIAL PRIMARY KEY,
  league_id INT REFERENCES leagues(l_id),
  season_name VARCHAR(255) NOT NULL UNIQUE,
  season_start DATE,
  season_end DATE,
  season_active INT DEFAULT 0,
  slug VARCHAR(255),
  created_timesamp TIMESTAMP DEFAULT NOW()
);