-- TO RUN THIS SCHEMA MAKE SURE YOU ARE IN THE ROOT DIRECTORY OF /DB IN YOUR TERMINAL
-- psql -l
-- psql -d postgres
-- \c postgress
-- \i reviews.sql
-- \dt
-- SELECT * FROM public."Reviews" LIMIT 5;


-- Table: public.Reviews

DROP TABLE IF EXISTS public."Reviews";

CREATE TABLE IF NOT EXISTS public."Reviews"
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    rating integer NOT NULL,
	date character varying(20) COLLATE pg_catalog."default" NOT NULL,
    summary character varying(150) COLLATE pg_catalog."default" NOT NULL,
    body character varying(1000) COLLATE pg_catalog."default" NOT NULL,
	recommend boolean NOT NULL,
	reported boolean NOT NULL DEFAULT false,
    reviewer_name character varying(60) COLLATE pg_catalog."default" NOT NULL,
    reviewer_email character varying(60) COLLATE pg_catalog."default" NOT NULL,
	response character varying COLLATE pg_catalog."default",
    helpfulness integer NOT NULL,
    CONSTRAINT "Reviews_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COPY public."Reviews" FROM '/Users/minggui/Immersive/SDC/reviews.csv' DELIMITER ',' CSV HEADER;
