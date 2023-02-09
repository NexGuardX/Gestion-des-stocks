BEGIN;


CREATE TABLE "product_has_category" (
    "product_id" INTEGER REFERENCES "product"("id"),
    "category_id" INTEGER REFERENCES "category"("id"),
    PRIMARY KEY ("product_id", "category_id")
);
COMMIT;