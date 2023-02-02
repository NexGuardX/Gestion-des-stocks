BEGIN;

INSERT INTO public.alimentaire(
	 "article", "quantité", "catégorie")
	VALUES 
	( 'Yaourt',1 ,'Frais'),
	( 'Fromage',1 ,'Frais'),
	( 'Café',1 ,'Epiceries'),
	( 'poulet',1 ,'Viandes');

INSERT INTO public.bébé(
	 "article", "quantité", "catégorie")
	VALUES 
	( 'couche',1 ,'hygiènes');

INSERT INTO public.entretien_nettoyage(
	 "article", "quantité", "catégorie")
	VALUES 
	( 'lessive',1 ,'lessives');


INSERT INTO public.hygiène(
	 "article", "quantité", "catégorie")
	VALUES 
	( 'papier wc',1 ,'wc'),
	( 'essuie tout',1 ,'hygiènes');

INSERT INTO public.liste(
	 "alimentaire_id", "bébé_id", "entretien_nettoyage_id", "hygiène_id")
	VALUES 
	( 1,1,1,1);
	
COMMIT;


	
