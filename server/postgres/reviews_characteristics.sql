-- TO RUN THIS SCHEMA MAKE SURE YOU ARE IN THE ROOT DIRECTORY OF /DB IN YOUR TERMINAL
-- psql -l
-- psql -d postgres
-- \c postgress
-- \i reviews_photos.sql
-- \dt
-- SELECT * FROM reviews_characteristics LIMIT 5;



DROP TABLE IF EXISTS reviews_characteristics;

CREATE TABLE IF NOT EXISTS reviews_characteristics
(
    id bigserial,
    characteristic_id integer NOT NULL,
    review_id integer NOT NULL,
    value integer NOT NULL,
    CONSTRAINT reviews_characteristics_pkey PRIMARY KEY (id),
    CONSTRAINT fk_review FOREIGN KEY(review_id) REFERENCES reviews (id),
    CONSTRAINT fk_characteristics FOREIGN KEY(characteristic_id) REFERENCES characteristics (id)

)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COPY reviews_characteristics FROM '/Users/minggui/Immersive/SDC/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX index_reviews_characteristics_review_id ON reviews_characteristics (review_id);
CREATE INDEX index_reviews_characteristics_characteristic_id ON reviews_characteristics (characteristic_id);

-- the id's might not be in order.
-- use \d to see which rows are sequential
-- use the below so you get the last id
SELECT setval('reviews_characteristics_id_seq', (SELECT MAX(id) FROM reviews_characteristics));