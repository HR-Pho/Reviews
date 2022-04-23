-- TO RUN THIS SCHEMA MAKE SURE YOU ARE IN THE ROOT DIRECTORY OF /DB IN YOUR TERMINAL
-- psql -l
-- psql -d postgres
-- \c postgres
-- \i reviews.sql
-- \dt
-- SELECT * FROM reviews LIMIT 5;


DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE IF NOT EXISTS reviews
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    rating integer NOT NULL,
	date bigint NOT NULL,
    summary character varying(150) COLLATE pg_catalog."default" NOT NULL,
    body character varying(1000) COLLATE pg_catalog."default" NOT NULL,
	recommend boolean NOT NULL,
	reported boolean NOT NULL DEFAULT false,
    reviewer_name character varying(60) COLLATE pg_catalog."default" NOT NULL,
    reviewer_email character varying(60) COLLATE pg_catalog."default" NOT NULL,
	response character varying COLLATE pg_catalog."default",
    helpfulness integer NOT NULL,
    CONSTRAINT reviews_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


COPY reviews FROM '/Users/minggui/Immersive/SDC/reviews.csv' DELIMITER ',' CSV HEADER;

UPDATE reviews SET date=date/1000;

ALTER TABLE reviews ALTER COLUMN date TYPE timestamp without time zone using to_timestamp(date) AT TIME ZONE 'UTC';

ALTER TABLE reviews ALTER COLUMN date SET DEFAULT NOW();

-- get reviews
-- index product_id column to get reviews for that product faster
CREATE INDEX index_reviews_product_id ON reviews (product_id);
-- make sure your query plan says "Index Scan"
EXPLAIN ANALYZE SELECT * FROM reviews WHERE product_id = '65660';