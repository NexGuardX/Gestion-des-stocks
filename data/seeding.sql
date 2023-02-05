BEGIN;

INSERT INTO public.category(
	 "id","name")
	VALUES 
	( 1,'frais'),
	( 2,'surgelé'),
	( 3,'pain-viennoiserie'),
	( 4,'épicerie-salée'),
	( 5,'épicerie-sucré'),
	( 6,'boisson'),
	( 7,'fruits-légumes'),
	( 8,'bébé'),
	( 9,'entretien-nettoyage'),
	( 10,'viande'),
	( 11,'hygiène'),
	( 12,'autre');


INSERT INTO public.article(
	 "name", "quantité", "category_id")
	VALUES 
	( 'Yop',1 ,1),
	( 'Fromage',1 ,1),
	( 'Café',1 ,5),
	( 'poulet',1 ,10),
	( 'couche',1 ,8),
	( 'lessive',1 ,9),
	( 'papier',1 ,11);


	
COMMIT;


	
