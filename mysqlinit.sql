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
	`ville` VARCHAR(255),
	`latitude` FLOAT,
	`longitude` FLOAT,
	PRIMARY KEY(`id`)
);

CREATE TABLE `Adherent` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`Password` VARCHAR(255),
	`Abonnement` VARCHAR(255),
	`Prénom` VARCHAR(255),
	`Nom` VARCHAR(255),
	`Mail` VARCHAR(255),
	`Ville` VARCHAR(255),
	`Service` VARCHAR(255),
	`token` VARCHAR(255),
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
	`Ville` VARCHAR(255),
	`Item` VARCHAR(255),
	`Quantité` INTEGER,
	PRIMARY KEY(`id`)
);

CREATE TABLE `Livraison` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`Collecte` DATETIME,
	`Ville` VARCHAR(255),
	`Destination` VARCHAR(255),
	`Statut` VARCHAR(255),
	`Adresse` VARCHAR(255),
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


-- ADD VALUES TO TABLES

INSERT INTO `Pays` (`Nom`) VALUES ('France');
INSERT INTO `Pays` (`Nom`) VALUES ('Allemagne');
INSERT INTO `Pays` (`Nom`) VALUES ('Espagne');

INSERT INTO `Ville` (`Pays`, `Nom`, `Adresse`) VALUES ('France', 'Paris', '1 rue de la Paix');
INSERT INTO `Ville` (`Pays`, `Nom`, `Adresse`) VALUES ('France', 'Lyon', '1 rue de la République');
INSERT INTO `Ville` (`Pays`, `Nom`, `Adresse`) VALUES ('Allemagne', 'Berlin', '1 rue de la Liberté');
INSERT INTO `Ville` (`Pays`, `Nom`, `Adresse`) VALUES ('Espagne', 'Madrid', '1 rue de la Fraternité');

INSERT INTO `Entrepot` (`ville`, `latitude`, `longitude`) VALUES ('Paris', 48.8566, 2.3522);
INSERT INTO `Entrepot` (`ville`, `latitude`, `longitude`) VALUES ('Lyon', 45.75, 4.85);
INSERT INTO `Entrepot` (`ville`, `latitude`, `longitude`) VALUES ('Berlin', 52.52, 13.405);
INSERT INTO `Entrepot` (`ville`, `latitude`, `longitude`) VALUES ('Madrid', 40.4168, -3.7038);

INSERT INTO `Abonnement` (`Nom`, `PrixMois`, `PrixAn`, `Description`) VALUES ('Basic', 5, 50, 'Basic Support');
INSERT INTO `Abonnement` (`Nom`, `PrixMois`, `PrixAn`, `Description`) VALUES ('Standard', 10, 100, 'Livraison Standard');
INSERT INTO `Abonnement` (`Nom`, `PrixMois`, `PrixAn`, `Description`) VALUES ('Premium', 20, 200, 'Livraison Premium');
INSERT INTO `Abonnement` (`Nom`, `PrixMois`, `PrixAn`, `Description`) VALUES ('VIP', 30, 300, 'Livraison VIP');

INSERT INTO `Perks` (`Nom`, `Abonnement`) VALUES ('Basic Support', 'Basic');
INSERT INTO `Perks` (`Nom`, `Abonnement`) VALUES ('Livraison Standard', 'Standard');
INSERT INTO `Perks` (`Nom`, `Abonnement`) VALUES ('Livraison Premium', 'Premium');
INSERT INTO `Perks` (`Nom`, `Abonnement`) VALUES ('Livraison VIP', 'VIP');


INSERT INTO `Stock` (`Ville`, `Item`, `Quantité`) VALUES ('Paris', 'Pommes', 100);
INSERT INTO `Stock` (`Ville`, `Item`, `Quantité`) VALUES ('Paris', 'Poires', 50);
INSERT INTO `Stock` (`Ville`, `Item`, `Quantité`) VALUES ('Lyon', 'Pommes', 200);


INSERT INTO `Livraison` (`Collecte`, `Ville`, `Destination`, `Statut`, `Adresse`) VALUES ('2020-01-01 00:00:00', 'Paris', 'Lyon', 'En cours', '1 rue de la Paix');
INSERT INTO `Livraison` (`Collecte`, `Ville`, `Destination`, `Statut`, `Adresse`) VALUES ('2020-01-01 00:00:00', 'Paris', 'Berlin', 'En cours', '1 rue de la Paix');
INSERT INTO `Livraison` (`Collecte`, `Ville`, `Destination`, `Statut`, `Adresse`) VALUES ('2020-01-01 00:00:00', 'Paris', 'Madrid', 'En cours', '1 rue de la Paix');
INSERT INTO `Livraison` (`Collecte`, `Ville`, `Destination`, `Statut`, `Adresse`) VALUES ('2020-01-01 00:00:00', 'Lyon', 'Paris', 'En cours', '1 rue de la République');
INSERT INTO `Livraison` (`Collecte`, `Ville`, `Destination`, `Statut`, `Adresse`) VALUES ('2020-01-01 00:00:00', 'Lyon', 'Berlin', 'En cours', '1 rue de la République');
INSERT INTO `Livraison` (`Collecte`, `Ville`, `Destination`, `Statut`, `Adresse`) VALUES ('2020-01-01 00:00:00', 'Lyon', 'Madrid', 'En cours', '1 rue de la République');

INSERT INTO `Error` (`id`, `Titre`, `texte`) VALUES (1, 'Erreur 404', 'Page non trouvée');
INSERT INTO `Error` (`id`, `Titre`, `texte`) VALUES (2, 'Erreur 500', 'Erreur interne');

INSERT INTO `Ticket` (`Titre`, `Statut`, `Tag`, `Priority`) VALUES ('Problème de connexion', 'En cours', 'Connexion', 'Moyenne');
INSERT INTO `Ticket` (`Titre`, `Statut`, `Tag`, `Priority`) VALUES ('Problème de livraison', 'En cours', 'Livraison', 'Haute');
INSERT INTO `Ticket` (`Titre`, `Statut`, `Tag`, `Priority`) VALUES ('Problème de paiement', 'En cours', 'Paiement', 'Basse');

