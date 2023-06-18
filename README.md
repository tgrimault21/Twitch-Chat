# Twitch-Chat

## Les différentes étapes

Les consignes étant de reproduire fidèlement, en environ 3 à 5h, le chat de la plateforme Twitch, donc son design et son comportement, il fallait donc que je me familiarise avec celui-ci. J'ai donc passé du temps sur Twitch pour étudier son chat et analyser son comportement.

J'ai donc ensuite pu commencer le projet, que j'ai initialisé avec Vite. Ce choix m'est venu pour plusieurs raisons : tout d'abord, je n'avais jamais eu l'occasion de démarrer un nouveau projet avec cette techno depuis que je la connais, donc j'ai sauté sur l'occasion, mais également parce que Join utilise cette technologie et que c'est le choix qui fait le plus sens en 2023. 

La première chose que j'ai donc faite c'est reprendre le code produit durant le premier entretien, et directement mettre en place l'exercice avec l'installation des librairies nécessaires, la configuration et la séparation des fichiers en différents dossier. J'ai notamment décidé d'organiser les composants selon leur hiérarchie.

Le premier objectif était donc d'avoir un chat qui visuellement matchait parfaitement celui de Twitch, avec le header et la liste des messages. Je me suis donc focalisé sur inspecter l’élément du chat de Twitch pour y reprendre un maximum d’élément (couleurs, tailles de police etc...) et les variabiliser dans le .scss. Ce travail a été continuel durant tout le développement du chat. Sans parler du fait que c'était facile de se faire haper par le stream, c'était très chronophage. Je me suis ensuite logiquement attelé à la partie en bas du chat et donc l'envoi de message.

Je me suis ensuite engagé sur le chantier du scrolling. J’ai longtemps persévéré avec mon ancienne technique du `flex-direction: column-reverse`, mais ce n'était finalement pas possible de la conserver, notamment pour ne plus que le chat continue de scroller automatiquement quand on est dans le mode "Chat en pause". En avançant je réfléchissais également à commencer architecturer le code pour éviter les rerendering inutiles, donc je me suis documenté, notamment sur les Ref, pour trouver des moyens de faire ça efficacement. Après plusieurs tests et le temps commençant déjà à me faire défaut, j'ai décidé de prendre la solution que j'avais en tête depuis le début, et donc j'ai opté pour l'utilisation du onScroll mettant à jour un state dans le composant parent, puis la mémoisation des composants ensuite (la solution facile).

Pour finir, j'ai passé du temps à bien tout tester, corriger ce qui n'allait pas, tout en vérifiant que le comportement du chat Twitch était bien respecté. Je me suis ensuite relu et j'ai nettoyé ce qu'il y avait à nettoyer.

## Mon approche et le timing

Avant de commencer l'exercice, j'avais décidé de rester chez moi tout le Samedi pour m'y consacrer, sans pour autant réserver un créneau de 4-5h pour finir le plus vite possible. J'avais prévu de faire des pauses, avancer tranquillement selon mes envies et mon inspiration, avec comme deadline le samedi soir. L'inconvénient c'est que c'est ainsi plus difficile de savoir exactement combien de temps j'ai passé à développer (je regardais quand même l'heure pour avoir une estimation).

Mon objectif était de pouvoir reproduire parfaitement le design du chat et le comportement du scroll, mais je voulais également développer la fonction reply. Je ne m'attendais pas forcément à pouvoir la faire, mais je suis quand même déçu de ne pas avoir eu le temps.

J'estime mon temps de travail total à un peu plus de 5h. Je n’ai pas vraiment eu de point de blocage, peut-être passé un peu trop de temps que prévu à gérer les différentes hauteurs des éléments, mais c’est juste très long de chercher toutes les valeurs css pour les imiter, très chronophage. Toute la partie design m'a pris la majorité du temps, je dirais 3h sur la totalité de l'exercice. La gestion du scrolling m'a pris plus d'une heure en comptant le temps que j'ai passé à me documenter. Le reste du temps comprends la mise en place du projet, la récupération et affichage des données etc... tout en faisant attention à maintenir un code propre au fur et à mesure de l’avancement pour ne pas avoir à tout nettoyer à la fin, ainsi que la phase de recette et de relecture.

## Conclusion

Je suis satisfait du rendu final, mais quand même un peu frustré d'avoir pris autant de temps à peaufiner le css et donc ne pas avoir pu intégrer plus de fonctionnalités. C'était un exercice néanmoins fun à réaliser, qui m'a permis de faire des choses différentes de ce que je fais d'habitude (notamment l'utilisation de websocket et la gestion du scroll).