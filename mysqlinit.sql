CREATE TABLE `Pays` (
	`Nom` VARCHAR(255) UNIQUE,
	PRIMARY KEY(`Nom`)
);


CREATE TABLE `Ville` (
	`Pays` VARCHAR(255),
	`Nom` VARCHAR(255) UNIQUE,
	`Adresse` VARCHAR(255),
	PRIMARY KEY(`Nom`)
);


CREATE TABLE `Entrepot` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`pays` VARCHAR(255),
	`ville` VARCHAR(255),
	`latitude` FLOAT,
	`longitude` FLOAT,
	PRIMARY KEY(`id`)
);


CREATE TABLE `Adherent` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`Password` VARCHAR(255),
	`Abonnement` VARCHAR(255),
	`Prenom` VARCHAR(255),
	`Nom` VARCHAR(255),
	`Mail` VARCHAR(255),
	`Ville` VARCHAR(255),
	`Service` VARCHAR(255),
	`token` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `Commercant` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`Nom` VARCHAR(255) NOT NULL,
	`Adresse` VARCHAR(255) NOT NULL,
	`Referent` INTEGER NOT NULL,
	PRIMARY KEY(`id`)
);


CREATE TABLE `Abonnement` (
	`Nom` VARCHAR(255) UNIQUE,
	`PrixMois` INTEGER,
	`PrixAn` INTEGER,
	`Description` VARCHAR(255),
	PRIMARY KEY(`Nom`)
);


CREATE TABLE `Perks` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`Nom` VARCHAR(255),
	`Abonnement` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `Stock` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`Entrepot` INTEGER,
	`Item` VARCHAR(255),
	`Quantité` INTEGER,
	PRIMARY KEY(`id`)
);


CREATE TABLE `Livraison` (
	`title` VARCHAR(255),
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`Depart` DATETIME,
	`Entrepot` INTEGER,
	`Arrivee` DATETIME,
	`Arrivelat` FLOAT,
	`Arrivelong` FLOAT,
	`Statut` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `Error` (
	`id` INTEGER NOT NULL UNIQUE,
	`Titre` VARCHAR(255),
	`texte` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `Ticket` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`Titre` VARCHAR(255),
	`Statut` VARCHAR(255),
	`Tag` VARCHAR(255),
	`Priority` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `Palette` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`Livraison` INTEGER,
	`Stock` INTEGER,
	`Quantité` INTEGER,
	PRIMARY KEY(`id`)
);


-- ADD VALUES TO TABLES

INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Basic', 'Mathis', 'Techer', 'Mathis@Techer', 'Paris', 'Commercant');
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Basic', 'Léon', 'Pupier', 'Léon@Pupier', 'Paris', 'Commercant');
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Standard', 'Zoe', 'Delaunay', 'Zoe@Delaunay', 'Paris', 'Commercant');
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Standard', 'Samuel', 'BloomField', 'Samuel@BloomField', 'Paris', 'Commercant');
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Premium', 'Milan', 'Gerard', 'Milan@Gerard', 'Paris', 'Commercant');
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Lucas', 'Andre', 'Lucas@Andre', 'Paris', 'Commercant');
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Loïc', 'Andre', 'Loïc@Andre', 'Paris', 'Commercant');
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Tom', 'Lafont', 'Tom@Lafont', 'Paris', 'Commercant');	
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Léo', 'Lafont', 'Léo@Lafont', 'Paris', 'Commercant');
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Jean Baptiste', 'Yung', 'Jeanbaptiste@yung', 'Paris', 'Commercant');
INSERT INTO `Adherent` (Password, Abonnement, Prenom, Nom, Mail, Ville, Service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'hugo', 'antreassian', 'hugo.antreassian@gmail.com', 'Paris', 'Commercant');


INSERT INTO `Pays` (`Nom`) VALUES ('France');
INSERT INTO `Pays` (`Nom`) VALUES ('Allemagne');
INSERT INTO `Pays` (`Nom`) VALUES ('Espagne');

INSERT INTO `Ville` (`Pays`, `Nom`, `Adresse`) VALUES ('France', 'Paris', '1 rue de la Paix');
INSERT INTO `Ville` (`Pays`, `Nom`, `Adresse`) VALUES ('France', 'Lyon', '1 rue de la République');
INSERT INTO `Ville` (`Pays`, `Nom`, `Adresse`) VALUES ('Allemagne', 'Berlin', '1 rue de la Liberté');
INSERT INTO `Ville` (`Pays`, `Nom`, `Adresse`) VALUES ('Espagne', 'Madrid', '1 rue de la Fraternité');

INSERT INTO `Entrepot` (`pays`, `ville`, `latitude`, `longitude`) VALUES ('France', 'Paris', 48.8566, 2.3522);
INSERT INTO `Entrepot` (`pays`, `ville`, `latitude`, `longitude`) VALUES ('France', 'Lyon', 45.75, 4.85);
INSERT INTO `Entrepot` (`pays`, `ville`, `latitude`, `longitude`) VALUES ('Allemagne', 'Berlin', 52.52, 13.405);
INSERT INTO `Entrepot` (`pays`, `ville`, `latitude`, `longitude`) VALUES ('Espagne', 'Madrid', 40.4168, -3.7038);

INSERT INTO `Commercant` (`Nom`, `Adresse`, `Referent`) VALUES ('Carrefour', '1 rue de la Paix', 1);
INSERT INTO `Commercant` (`Nom`, `Adresse`, `Referent`) VALUES ('Auchan', '1 rue de la République', 2);
INSERT INTO `Commercant` (`Nom`, `Adresse`, `Referent`) VALUES ('Leclerc', '1 rue de la Liberté', 3);
INSERT INTO `Commercant` (`Nom`, `Adresse`, `Referent`) VALUES ('Intermarché', '1 rue de la Fraternité', 4);

INSERT INTO `Abonnement` (`Nom`, `PrixMois`, `PrixAn`, `Description`) VALUES ('Basic', 5, 50, 'Basic Support');
INSERT INTO `Abonnement` (`Nom`, `PrixMois`, `PrixAn`, `Description`) VALUES ('Standard', 10, 100, 'Livraison Standard');
INSERT INTO `Abonnement` (`Nom`, `PrixMois`, `PrixAn`, `Description`) VALUES ('Premium', 20, 200, 'Livraison Premium');
INSERT INTO `Abonnement` (`Nom`, `PrixMois`, `PrixAn`, `Description`) VALUES ('VIP', 30, 300, 'Livraison VIP');

INSERT INTO `Perks` (`Nom`, `Abonnement`) VALUES ('Basic Support', 'Basic');
INSERT INTO `Perks` (`Nom`, `Abonnement`) VALUES ('Livraison Standard', 'Standard');
INSERT INTO `Perks` (`Nom`, `Abonnement`) VALUES ('Livraison Premium', 'Premium');
INSERT INTO `Perks` (`Nom`, `Abonnement`) VALUES ('Livraison VIP', 'VIP');

INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (1, 'Pomme', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (1, 'Poire', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (1, 'Banane', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (1, 'Orange', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (2, 'Pomme', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (2, 'Poire', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (2, 'Banane', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (2, 'Orange', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (3, 'Pomme', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (3, 'Poire', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (3, 'Banane', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (3, 'Orange', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (4, 'Pomme', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (4, 'Poire', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (4, 'Banane', 100);
INSERT INTO `Stock` (`Entrepot`, `Item`, `Quantité`) VALUES (4, 'Orange', 100);

INSERT INTO `Livraison` (`title`, `Depart`, `Entrepot`, `Arrivee`, `Arrivelat`, `Arrivelong`, `Statut`) VALUES ('Livraison 1', '2024-08-12 00:00:00', 1, '2024-08-13 00:00:00', 52.52, 13.405, 'Terminee');
INSERT INTO `Livraison` (`title`, `Depart`, `Entrepot`, `Arrivee`, `Arrivelat`, `Arrivelong`, `Statut`) VALUES ('Livraison 2', '2024-08-14 00:00:00', 2, '2024-08-16 00:00:00', 40.4168, -3.7038, 'En cours');
INSERT INTO `Livraison` (`title`, `Depart`, `Entrepot`, `Arrivee`, `Arrivelat`, `Arrivelong`, `Statut`) VALUES ('Livraison 3', '2024-08-11 00:00:00', 3, '2024-08-11 00:00:00', 48.8566, 2.3522, 'Terminee');
INSERT INTO `Livraison` (`title`, `Depart`, `Entrepot`, `Arrivee`, `Arrivelat`, `Arrivelong`, `Statut`) VALUES ('Livraison 4', '2024-08-16 00:00:00', 4, '2024-08-17 00:00:00', 45.75, 4.85, 'En attente');

INSERT INTO `Error` (`id`, `Titre`, `texte`) VALUES (404, 'Erreur 404', 'Page non trouvée');
INSERT INTO `Error` (`id`, `Titre`, `texte`) VALUES (500, 'Erreur 500', 'Erreur interne');

INSERT INTO `Ticket` (`Titre`, `Statut`, `Tag`, `Priority`) VALUES ('Problème de connexion', 'En cours', 'Connexion', 'Moyenne');
INSERT INTO `Ticket` (`Titre`, `Statut`, `Tag`, `Priority`) VALUES ('Problème de livraison', 'En cours', 'Livraison', 'Haute');
INSERT INTO `Ticket` (`Titre`, `Statut`, `Tag`, `Priority`) VALUES ('Problème de paiement', 'En cours', 'Paiement', 'Basse');
INSERT INTO `Ticket` (`Titre`, `Statut`, `Tag`, `Priority`) VALUES ('Problème de stock', 'En cours', 'Stock', 'Haute');
INSERT INTO `Ticket` (`Titre`, `Statut`, `Tag`, `Priority`) VALUES ('Problème de service', 'En cours', 'Service', 'Moyenne');
INSERT INTO `Ticket` (`Titre`, `Statut`, `Tag`, `Priority`) VALUES ('Problème de site', 'En cours', 'Site', 'Basse');
