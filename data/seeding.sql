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
	( 'Yop',1 ,1),
	( 'camembert',1 ,1),
	( 'Café',1 ,5),
	( 'poulet',1 ,10),
	( 'couche',1 ,8),
	( 'lessive',1 ,9),
	( 'papier_wc',1 ,11);


	
COMMIT;


	
