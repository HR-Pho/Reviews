-- TO RUN THIS SCHEMA MAKE SURE YOU ARE IN THE ROOT DIRECTORY OF /DB IN YOUR TERMINAL
-- psql -l
-- psql -d postgres
-- \c postgress
-- \i reviews_photos.sql
-- \dt
-- SELECT * FROM public."reviews_characteristics" LIMIT 5;


-- Table: public.reviews_characteristics

DROP TABLE IF EXISTS public.reviews_characteristics;

CREATE TABLE IF NOT EXISTS public.reviews_characteristics
(
    id integer NOT NULL,
    characteristic_id integer NOT NULL,
    review_id integer NOT NULL,
    value integer NOT NULL,
    CONSTRAINT reviews_characteristics_pkey PRIMARY KEY (id),
    CONSTRAINT fk_review FOREIGN KEY(review_id) REFERENCES public."Reviews"(id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COPY public.reviews_characteristics FROM '/Users/minggui/Immersive/SDC/characteristic_reviews.csv' DELIMITER ',' CSV HEADER;

