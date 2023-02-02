BEGIN;
-- faire place nette avant de créer les tables
DROP TABLE IF EXISTS alimentaire, bébé, entretien_nettoyage, hygiène, liste;

CREATE TABLE alimentaire (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article text NOT NULL,
    quantité int NOT NULL,
    catégorie text,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  --on peut utiliser now() aussi
    "updated_at" timestamptz
   
);
CREATE TABLE bébé (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article text NOT NULL,
    quantité int NOT NULL,
    catégorie text,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  --on peut utiliser now() aussi
    "updated_at" timestamptz
   
);


CREATE TABLE entretien_nettoyage (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article text NOT NULL,
    quantité int NOT NULL,
    catégorie text,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  --on peut utiliser now() aussi
    "updated_at" timestamptz
   
);

CREATE TABLE hygiène (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article text NOT NULL,
    quantité int NOT NULL,
    catégorie text,
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  --on peut utiliser now() aussi
    "updated_at" timestamptz
   
);
CREATE TABLE liste (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "alimentaire_id" integer NOT NULL REFERENCES "alimentaire" ("id"),
    "bébé_id" integer NOT NULL REFERENCES "bébé" ("id"),
    "entretien_nettoyage_id" integer NOT NULL REFERENCES "entretien_nettoyage" ("id"),
    "hygiène_id" integer NOT NULL REFERENCES "hygiène" ("id"),
    "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  --on peut utiliser now() aussi
    "updated_at" timestamptz
   
);

COMMIT;