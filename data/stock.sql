BEGIN;
-- faire place nette avant de créer les tables

CREATE TABLE "category" (
    "id" int PRIMARY KEY,
    "name" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  --on peut utiliser now() aussi
    "updated_at" timestamptz
   
);

CREATE TABLE "article" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "quantité" int NOT NULL,
    "category_id" integer NOT NULL REFERENCES "category" ("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  --on peut utiliser now() aussi
    "updated_at" timestamptz
   
);





COMMIT;