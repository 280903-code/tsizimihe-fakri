# TSIZIMIHÉ SERVICES — site vitrine

Site responsive construit uniquement avec HTML, CSS et JavaScript natifs (aucun framework). La navigation répartit maintenant le contenu sur plusieurs pages :
- `index.html` : accueil et témoignages.
- `materiels.html` : catalogue et filtre déroulant par catégorie (étais de chantier, serre-joints cimentiers, bétonnière électrique, groupe électrogène, vibreur à béton, pompe à eau, poutrelles de coffrage en bois et contreplaqué filmé bétonex).
- `services.html` : services proposés.
- `apropos.html` : présentation de TSIZIMIHÉ SERVICES.
- `contact.html` : coordonnées et demande de devis via WhatsApp.

## Lancer le site
1. Décompressez le dossier.
2. Ouvrez `index.html` dans un navigateur.
3. Une connexion internet est nécessaire pour afficher les photos distantes (Unsplash) et ouvrir WhatsApp.

## Personnalisation rapide
- Les fichiers HTML : textes et contenu de chaque page.
- `css/style.css` : couleurs, tailles, espacements, mise en page.
- `js/script.js` : filtre du catalogue, menu mobile et formulaire WhatsApp.
- Les icônes sont des SVG intégrés au HTML ; les animations d'entrée incluent une prise en compte de la préférence de réduction des animations du navigateur.

## Informations à vérifier avant publication
- Confirmer le numéro WhatsApp `+269 433 95 45`.
- Confirmer les matériels réellement disponibles et les conditions de l'offre « 15 jours + 5 jours offerts ».
- Les prix sont affichés « sur devis » car aucun tarif précis n'a été fourni.
- Les témoignages de la page d'accueil sont des exemples de présentation : les remplacer par des avis réels et validés avant publication.
- Les portraits des témoignages et celui du fondateur sont des photos d'illustration chargées depuis Unsplash : les remplacer par les photos souhaitées avant publication.
- La vidéo d'arrière-plan de l'accueil est la version web `home-background.mp4`, convertie depuis `3397F2A1-1911-41A5-94FC-FA1EC9F796EF.MP4`. Elle est muette, en boucle et fixe pendant le défilement.
- Les photos du catalogue sont stockées dans `images/catalog/`. Crédits des fichiers Wikimedia Commons :
  - `concrete-mixer.jpg` — RiazACU, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Mini_concrete_mixer.jpg).
  - `formwork-support.jpg` — Johnnybam, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [source](https://commons.wikimedia.org/wiki/File:Wall_Support_and_Formwork_Setup.jpg).
  - `generator.jpg` — Bryansfiles, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), [source](https://commons.wikimedia.org/wiki/File:Caterpillar_Diesel_Generators.JPG).
  - `concrete-vibrator.jpg` — U.S. Navy photo by Photographer's Mate 3rd Class John P. Curtis, domaine public, [source](https://commons.wikimedia.org/wiki/File:US_Navy_050308-N-9712C-001_Builder_3rd_Class_Peter_Lyzack_uses_a_concrete_vibrator_to_fill_in_hard_to_get_spots_in_the_foundation_at_a_construction_project_in_Okinawa,_Japan.jpg).
  - `water-pump.jpg` — Robert Lamb / Geograph Britain and Ireland, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/), [source](https://commons.wikimedia.org/wiki/File:Unknown_engine_with_Godwin_Chop_water_pump_-_geograph.org.uk_-_2665037.jpg).
  - `masonry-clamps.jpg`, `timber-beams.jpg` et `film-faced-plywood.jpg` — photos Unsplash sous la [licence Unsplash](https://unsplash.com/license).
- Les images de fond décoratives restantes sont définies dans `css/style.css` et peuvent y être remplacées.
- Le formulaire prépare un message WhatsApp; il ne stocke pas les données sur un serveur.

## Couleurs
- Vert foncé : `#073d32`
- Jaune : `#ffc928`
- Fond clair : `#f5f6f3`
