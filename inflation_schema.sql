DROP table if exists inflation_db;

CREATE table inflation_db(
	country_code VARCHAR (3) not null,
	inflation_type VARCHAR (40) not null,
	country VARCHAR (30) not null PRIMARY KEY,
	year_2005 double precision not null,
	year_2006 DOUBLE precision not null,
	year_2007 DOUBLE precision not null,
	year_2008 DOUBLE precision not null,
	year_2009 DOUBLE precision not null,
	year_2010 DOUBLE precision not null,
	year_2011 DOUBLE precision not null,
	year_2012 DOUBLE precision not null,
	year_2013 DOUBLE precision not null,
	year_2014 DOUBLE precision not null,
	year_2015 DOUBLE precision not null,
	year_2016 DOUBLE precision not null,
	year_2017 DOUBLE precision not null,
	year_2018 DOUBLE precision not null,
	year_2019 DOUBLE precision not null,
	year_2020 DOUBLE precision not null,
	year_2021 DOUBLE precision not null,
	year_2022 DOUBLE precision not null
	
);

SELECT * FROM inflation_db;