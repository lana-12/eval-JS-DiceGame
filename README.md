# DiceGame -  [lien](https://lana-12.github.io/eval-JS-DiceGame/)

Dans le cadre de ma formation de développeur Web - Web Mobile, j'ai réalisé un petit en JavaScript pour valider mes compétences.

## Description: 
+ Nom du repository sur github: https://github.com/lana-12/eval-JS-DiceGame
+ Par: Virginie Giacometti

#### Règles :
  Le jeu comprend 2 joueurs sur un seul et même écran. 
  + Chaque joueur possède un score temporaire (CURRENT) et un score global (global).

À chaque tour, le joueur a son CURRENT initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au global. 

Lors de son tour, le joueur peut décider à tout moment de:
  + Cliquer sur l’option “Hold”, qui permet d’envoyer les points du CURRENT vers le GLOBAL. Ce sera alors le tour de l’autre joueur.
  + Lancer le dé. S’il obtient un 1, son score CURRENT est perdu et c’est la fin de son tour.

### Le premier joueur qui atteint les 100 points sur global gagne le jeu


#### Technologies utilisées:
La réalisation de l'interface est pensé Mobile frist. J'ai utilisé le framework Bootstrap avec quelques médias queries. J'ai utilisé bootstrap en cdn :

  <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


  <!-- Icone -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">


#### Déploiement:
J'ai déployé mon jeu sur github pages.

```
Sur le github, allez dans setting au niveau du bloc Github Pages, sélectionnez dans “Source”, l'option “master branch” puis cliquez sur “Save”.
```


#### Organisation du répertoire:
  index.html
  style.css
  img/


#### Ressources utilisées pour la réalisation de l'évaluation
  - les cours sur Studi: html, css et bootstrap
  - la documentation bootstrap
  - les tutos sur le web
  - Visual studio code
  - Github




