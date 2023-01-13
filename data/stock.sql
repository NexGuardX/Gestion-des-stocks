BEGIN;
-- faire place nette avant de créer les tables
DROP TABLE IF EXISTS alimentaire, bébé, entretien_nettoyage, hygiène, utilisateur;

CREATE TABLE alimentaire (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article text NOT NULL,
    quantité int NOT NULL,
    catégorie text
   
);

CREATE TABLE utilisateur (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article text NOT NULL,
    quantité int NOT NULL,
    catégorie text
   
);

CREATE TABLE entretien_nettoyage (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article text NOT NULL,
    quantité int NOT NULL,
    catégorie text
   
);

CREATE TABLE hygiène (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    article text NOT NULL,
    quantité int NOT NULL,
    catégorie text
   
);


COMMIT;