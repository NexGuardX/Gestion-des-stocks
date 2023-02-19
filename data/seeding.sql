BEGIN;

INSERT INTO category(
	 "name")
	VALUES 
	( 'frais'),
	( 'surgelé'),
	( 'pain-viennoiserie'),
	( 'épicerie-salée'),
	( 'épicerie-sucré'),
	( 'boisson'),
	( 'fruits-légumes'),
	( 'bébé'),
	( 'entretien-nettoyage'),
	( 'viande'),
	( 'hygiène'),
	( 'autre');

INSERT INTO product(
	 "name", "quantity", "category_id")
	VALUES 
	( 'Yop',1 ,49),
	( 'camembert',1 ,49),
	( 'Café',1 ,53),
	( 'poulet',1 ,58),
	( 'couche',1 ,56),
	( 'lessive',1 ,57),
	( 'papier_wc',1 ,59);

INSERT INTO product_has_category(
	 "product_id", "category_id")
	VALUES 
	( 29 ,49),
	( 30 ,49),
	( 31 ,53),
	( 32 ,58),
	( 33 ,56),
	( 34 ,57),
	( 35,59);




	
COMMIT;


	