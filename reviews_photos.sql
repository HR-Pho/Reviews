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
    id integer NOT NULL,
    review_id integer NOT NULL,
    url character varying(500) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT reviews_photos_pkey PRIMARY KEY (id),
    CONSTRAINT fk_review FOREIGN KEY(review_id) REFERENCES reviews (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


COPY reviews_photos FROM '/Users/minggui/Immersive/SDC/reviews_photos.csv' DELIMITER ',' CSV HEADER;
