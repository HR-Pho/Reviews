-- TO RUN THIS SCHEMA MAKE SURE YOU ARE IN THE ROOT DIRECTORY OF /DB IN YOUR TERMINAL
-- psql -l
-- psql -d postgres
-- \c postgress
-- \i reviews_photos.sql
-- \dt
-- SELECT * FROM reviews_photos LIMIT 5;



DROP TABLE IF EXISTS reviews_photos;

CREATE TABLE IF NOT EXISTS reviews_photos
(
    id bigserial,
    review_id integer NOT NULL,
    url character varying(500) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT reviews_photos_pkey PRIMARY KEY (id),
    CONSTRAINT fk_review FOREIGN KEY(review_id) REFERENCES reviews (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE INDEX index_reviews_photos_review_id ON reviews_photos (review_id);

COPY reviews_photos FROM '/Users/minggui/Immersive/SDC/reviews_photos.csv' DELIMITER ',' CSV HEADER;

-- the id's might not be in order.
-- use \d to see which rows are sequential
-- use the below so you get the last id
SELECT setval('reviews_photos_id_seq', (SELECT MAX(id) FROM reviews_photos));