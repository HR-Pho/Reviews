
-- get reviews
-- index product_id column to get reviews for that product faster
CREATE INDEX index_reviews_product_id ON public."Reviews"(product_id);
-- make sure your query plan says "Index Scan"
EXPLAIN ANALYZE SELECT * FROM public."Reviews" WHERE product_id = '65660';

-- sort on helpfulness
-- sort on date (most recent)
-- sort on relevant?

-- filter by rating?