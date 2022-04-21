-- TO RUN THIS SCHEMA MAKE SURE YOU ARE IN THE ROOT DIRECTORY OF /DB IN YOUR TERMINAL
-- psql -l
-- psql -d postgres
-- \c postgress
-- \i reviews_photos.sql
-- \dt
-- SELECT * FROM public."Reviews_Photos" LIMIT 5;



-- Table: public.Reviews_Photos

DROP TABLE IF EXISTS public."Reviews_Photos";

CREATE TABLE IF NOT EXISTS public."Reviews_Photos"
(
    id integer NOT NULL,
    review_id integer NOT NULL,
    url character varying(500) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Reviews_Photos_pkey" PRIMARY KEY (id),
    CONSTRAINT fk_review FOREIGN KEY(review_id) REFERENCES public."Reviews"(id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


COPY public."Reviews_Photos" FROM '/Users/minggui/Immersive/SDC/reviews_photos.csv' DELIMITER ',' CSV HEADER;
