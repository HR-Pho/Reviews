DROP TABLE IF EXISTS characteristics;

CREATE TABLE IF NOT EXISTS characteristics
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    name character varying(10) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT characteristics_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COPY characteristics FROM '/Users/minggui/Immersive/SDC/characteristics.csv' DELIMITER ',' CSV HEADER;