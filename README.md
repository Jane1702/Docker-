# Docker-

Configuration de la Stack

MongoDB :
- Image Docker : L'image officielle de MongoDB est utilisée.
- Nom du conteneur : mongo.
- Variables d'environnement :
    MONGO_INITDB_ROOT_USERNAME=root
    MONGO_INITDB_ROOT_PASSWORD=password
- Ports : 27017 
- Volumes : Un volume nommé mongo-data est utilisé pour persister les données MongoDB entre les redémarrages du conteneur.
- Healthcheck : Un test de santé est configuré pour vérifier que MongoDB est accessible sur le port 27017.

Mongo Express :
- Image Docker : L'image officielle de Mongo Express est utilisée.
- Nom du conteneur : mongo-express.
- Dépendance : Le service dépend du démarrage du service mongo.
- Ports : 8081 
- Variables d'environnement :
    ME_CONFIG_MONGODB_PORT=27017
    ME_CONFIG_MONGODB_ADMINUSERNAME=root
    ME_CONFIG_MONGODB_ADMINPASSWORD=password
    ME_CONFIG_MONGODB_SERVER=mongo

Backend:

    Dockerfile :
    - Base image : Utilisation de l'image node:18.
    - Répertoire de travail : /usr/src/app
    - Installation des dépendances : Les fichiers package*.json sont copiés et les dépendances sont installées via npm install.
    - Outils supplémentaires : Installation de netcat-openbsd pour les vérifications réseau.
    - Copie du code source : Copie de tous les fichiers dans le répertoire de travail.
    - Exposition du port : 5000 
    - Commande de démarrage : L'application est démarrée avec node index.js.

    Nom du conteneur : backend.
    Ports : 5000 
    Dépendance : Le service dépend du démarrage du service mongo.
    Variables d'environnement :
        MONGO_URI=mongodb://mongodb:27017/mydatabase
    Commande : Un délai de 10 secondes (sleep 10) est ajouté avant de démarrer l'application pour s'assurer que MongoDB est prêt.

Frontend (React) :

    Dockerfile : 
    - Base Image : Utilisation de l'image node:21.
    - Répertoire de Travail : /usr/src/app
    - Installation des Dépendances : Les fichiers package*.json sont copiés et les dépendances sont installées via npm install.
    - Copie du Code Source : Copie de tous les fichiers dans le répertoire de travail.
    - Exposition du Port : 3000 
    - Commande de Démarrage : L'application est démarrée avec npm start.

    Nom du conteneur : frontend.
    Ports : 3000 
    Dépendance : Le service dépend du démarrage du service backend.

Nginx :
- Nom du conteneur : nginx.
- Ports : 80 
- Volumes : Le fichier de configuration Nginx nginx.conf est monté dans le conteneur.
- Dépendance : Le service dépend du démarrage des services frontend et backend.
- Configuration : Le fichier nginx.conf configure Nginx pour servir le frontend et faire office de reverse proxy pour les requêtes API vers le backend.


Démarrage des Services : Pour lancer tous les services, exécutez la commande docker-compose up dans le répertoire racine du projet.Cette commande démarre tous les services définis dans docker-compose.yml et assure qu'ils fonctionnent ensemble.
