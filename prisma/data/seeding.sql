BEGIN;

TRUNCATE TABLE "category" RESTART IDENTITY CASCADE ;

TRUNCATE TABLE "product" RESTART IDENTITY CASCADE ;

TRUNCATE TABLE "product_has_category" RESTART IDENTITY CASCADE ;

INSERT INTO "category"("name")
VALUES ('frais'), ('surgelé'), ('pain-viennoiserie'), ('épicerie-salée'), ('épicerie-sucré'), ('boisson'), ('fruits-légumes'), ('bébé'), ('entretien-nettoyage'), ('viande'), ('hygiène'), ('autre');

INSERT INTO
    "product"(
        "name",
        "quantity",
        "category_id"
    )
VALUES ('Yop', 1, 49), ('camembert', 1, 49), ('Café', 1, 53), ('poulet', 1, 58), ('couche', 1, 56), ('lessive', 1, 57), ('papier_wc', 1, 59);

INSERT INTO
    "product_has_category"("product_id", "category_id")
VALUES (1, 49), (2, 49), (3, 53), (4, 58), (5, 56), (6, 57);

COMMIT;