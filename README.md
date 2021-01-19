<h1 align= "center" >So Pekocko - Projet 6 OC</h1>

<p align= "center"><img src="https://user.oc-static.com/upload/2019/09/02/15674356878125_image2.png" width= "300px">

L'application So Pekocko est une application web permettant aux utilisateurs d’ajouter leurs sauces préférées en donnant une note et de liker ou disliker les sauces ajoutées par les autres utilisateurs.  

<details open="open">
  <summary>Sommaire</summary>
  <ol>
    <li>
      <a href="#demarrage">Démarrage</a>
      <ul>
        <li><a href="#prerequis">Prérequis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    </li>
        <li>
      <a href="#apropos">A propos du Site</a>
      <ul>
        <li><a href="#outils">Outils utilisés</a></li>
        <li><a href="#doc">Documentation</a></li>
      </ul>
    </li>
    <li><a href="#dependence">Dépendences NPM</li> 
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<h2 id="prerequis">Prérequis</h2>

<p>Avant toute chose, il faut cloner le projet via GitHub vers le dossier de votre choix :</p>

```sh
git clone https://github.com/Sheleril/So-Pekocko.git
```
:warning: Attention, pour que votre site fonctionne et que la connexion à la base de donnée puisse se faire, il faut crée un fichier dans votre dossier Backend.
L'appeler ".env" , et suivre la structure qui suit :

```js
TOKEN_SECRET_KEY=tokenSecretKey

DB_CLUSTER=ClusterName
DB_USER=UserName
DB_PASS=Password
```

Ceci est une sécurité pour la base de donnée, si vous souhaitez y accéder, je vous laisse [cliquer ici](mailto:sheleril68@gmail.com) pour me demander les variables *tokenSecretKey*, *ClusterName* et *Password* :smiley:


<h2 id="installation">Installation</h2>

<h3 align="center">Côté Frontend</h3>

Ciblez le Frontend avec votre terminal

```sh
cd frontend
```

Installez NPM

```sh
npm install
```
Lancez le serveur Frontend

```sh
ng serve
```

:warning: Pensez à garder ce terminal ouvert :warning:  

<h3 align="center">Côté Backend</h3>

Dans un second terminal, ciblez le backend
```sh
cd backend
```

Installez NPM
```sh
npm install
```








