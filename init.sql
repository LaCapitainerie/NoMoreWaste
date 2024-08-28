CREATE TABLE `abonnement` (
	`nom` VARCHAR(255) UNIQUE,
	`prixmois` INTEGER,
	`prixan` INTEGER,
	`description` VARCHAR(255),
	PRIMARY KEY(`nom`)
);

CREATE TABLE `adherent` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`password` VARCHAR(255),
	`abonnement` VARCHAR(255),
	`prenom` VARCHAR(255),
	`nom` VARCHAR(255),
	`mail` VARCHAR(255),
	`ville` VARCHAR(255),
	`service` VARCHAR(255),
	`token` VARCHAR(255),
	PRIMARY KEY(`id`)
);

CREATE TABLE `commercant` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`nom` VARCHAR(255) NOT NULL,
	`adresse` VARCHAR(255) NOT NULL,
	`referent` INTEGER NOT NULL,
	PRIMARY KEY(`id`)
);

CREATE TABLE `entrepot` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`pays` VARCHAR(255),
	`ville` VARCHAR(255),
	`latitude` FLOAT,
	`longitude` FLOAT,
	PRIMARY KEY(`id`)
);

CREATE TABLE `error` (
	`id` INTEGER NOT NULL UNIQUE,
	`titre` VARCHAR(255),
	`texte` VARCHAR(255),
	PRIMARY KEY(`id`)
);

CREATE TABLE `livraison` (
	`title` VARCHAR(255),
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`depart` DATETIME,
	`entrepot` INTEGER,
	`arrivee` DATETIME,
	`arrivelat` FLOAT,
	`arrivelong` FLOAT,
	`statut` VARCHAR(255),
	PRIMARY KEY(`id`)
);

CREATE TABLE `palette` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`livraison` INTEGER,
	`stock` INTEGER,
	`quantité` INTEGER,
	PRIMARY KEY(`id`)
);

CREATE TABLE `pays` (
	`nom` VARCHAR(255),
	PRIMARY KEY(`nom`)
);

CREATE TABLE `perks` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`nom` VARCHAR(255),
	`abonnement` VARCHAR(255),
	PRIMARY KEY(`id`)
);

CREATE TABLE `stock` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`entrepot` INTEGER,
	`item` VARCHAR(255),
	`quantité` INTEGER,
	PRIMARY KEY(`id`)
);

CREATE TABLE `ticket` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`titre` VARCHAR(255),
	`statut` VARCHAR(255),
	`tag` VARCHAR(255),
	`priority` VARCHAR(255),
	PRIMARY KEY(`id`)
);

CREATE TABLE `ville` (
	`pays` VARCHAR(255),
	`nom` VARCHAR(255),
	`adresse` VARCHAR(255),
	PRIMARY KEY(`nom`)
);

-- ADD VALUES TO TABLES

INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Basic', 'Mathis', 'Techer', 'Mathis@Techer', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Basic', 'Léon', 'Pupier', 'Léon@Pupier', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Standard', 'Zoe', 'Delaunay', 'Zoe@Delaunay', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Standard', 'Samuel', 'BloomField', 'Samuel@BloomField', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'Premium', 'Milan', 'Gerard', 'Milan@Gerard', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Lucas', 'Andre', 'Lucas@Andre', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Loïc', 'Andre', 'Loïc@Andre', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Tom', 'Lafont', 'Tom@Lafont', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Léo', 'Lafont', 'Léo@Lafont', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'Jean Baptiste', 'Yung', 'Jeanbaptiste@yung', 'Paris', 'commercant');
INSERT INTO `adherent` (password, abonnement, prenom, nom, mail, ville, service) VALUES ("$2y$10$erbJwGY4mxWpmjCGyocpFOBE23PZ48lpxScxFZQRhblEg9Yepkuf2", 'VIP', 'hugo', 'antreassian', 'hugo.antreassian@gmail.com', 'Paris', 'commercant');

INSERT INTO `pays` (`nom`) VALUES ('France');
INSERT INTO `pays` (`nom`) VALUES ('Allemagne');
INSERT INTO `pays` (`nom`) VALUES ('Espagne');

INSERT INTO `ville` (`pays`, `nom`, `adresse`) VALUES ('France', 'Paris', '1 rue de la Paix');
INSERT INTO `ville` (`pays`, `nom`, `adresse`) VALUES ('France', 'Lyon', '1 rue de la République');
INSERT INTO `ville` (`pays`, `nom`, `adresse`) VALUES ('Allemagne', 'Berlin', '1 rue de la Liberté');
INSERT INTO `ville` (`pays`, `nom`, `adresse`) VALUES ('Espagne', 'Madrid', '1 rue de la Fraternité');

INSERT INTO `entrepot` (`pays`, `ville`, `latitude`, `longitude`) VALUES ('France', 'Paris', 48.8566, 2.3522);
INSERT INTO `entrepot` (`pays`, `ville`, `latitude`, `longitude`) VALUES ('France', 'Lyon', 45.75, 4.85);
INSERT INTO `entrepot` (`pays`, `ville`, `latitude`, `longitude`) VALUES ('Allemagne', 'Berlin', 52.52, 13.405);
INSERT INTO `entrepot` (`pays`, `ville`, `latitude`, `longitude`) VALUES ('Espagne', 'Madrid', 40.4168, -3.7038);

INSERT INTO `commercant` (`nom`, `adresse`, `referent`) VALUES ('Carrefour', '1 rue de la Paix', 1);
INSERT INTO `commercant` (`nom`, `adresse`, `referent`) VALUES ('Auchan', '1 rue de la République', 2);
INSERT INTO `commercant` (`nom`, `adresse`, `referent`) VALUES ('Leclerc', '1 rue de la Liberté', 3);
INSERT INTO `commercant` (`nom`, `adresse`, `referent`) VALUES ('Intermarché', '1 rue de la Fraternité', 4);

INSERT INTO `abonnement` (`nom`, `prixmois`, `prixan`, `description`) VALUES ('Basic', 5, 50, 'Basic Support');
INSERT INTO `abonnement` (`nom`, `prixmois`, `prixan`, `description`) VALUES ('Standard', 10, 100, 'livraison Standard');
INSERT INTO `abonnement` (`nom`, `prixmois`, `prixan`, `description`) VALUES ('Premium', 20, 200, 'livraison Premium');
INSERT INTO `abonnement` (`nom`, `prixmois`, `prixan`, `description`) VALUES ('VIP', 30, 300, 'livraison VIP');

INSERT INTO `perks` (`nom`, `abonnement`) VALUES ('Basic Support', 'Basic');
INSERT INTO `perks` (`nom`, `abonnement`) VALUES ('livraison Standard', 'Standard');
INSERT INTO `perks` (`nom`, `abonnement`) VALUES ('livraison Premium', 'Premium');
INSERT INTO `perks` (`nom`, `abonnement`) VALUES ('livraison VIP', 'VIP');

INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (1, 'Pomme', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (1, 'Poire', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (1, 'Banane', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (1, 'Orange', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (2, 'Pomme', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (2, 'Poire', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (2, 'Banane', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (2, 'Orange', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (3, 'Pomme', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (3, 'Poire', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (3, 'Banane', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (3, 'Orange', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (4, 'Pomme', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (4, 'Poire', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (4, 'Banane', 100);
INSERT INTO `stock` (`entrepot`, `item`, `quantité`) VALUES (4, 'Orange', 100);

INSERT INTO `livraison` (`title`, `depart`, `entrepot`, `arrivee`, `arrivelat`, `arrivelong`, `statut`) VALUES ('livraison 1', '2024-08-12 00:00:00', 1, '2024-08-13 00:00:00', 52.52, 13.405, 'Terminee');
INSERT INTO `livraison` (`title`, `depart`, `entrepot`, `arrivee`, `arrivelat`, `arrivelong`, `statut`) VALUES ('livraison 2', '2024-08-14 00:00:00', 2, '2024-08-16 00:00:00', 40.4168, -3.7038, 'En cours');
INSERT INTO `livraison` (`title`, `depart`, `entrepot`, `arrivee`, `arrivelat`, `arrivelong`, `statut`) VALUES ('livraison 3', '2024-08-11 00:00:00', 3, '2024-08-11 00:00:00', 48.8566, 2.3522, 'Terminee');
INSERT INTO `livraison` (`title`, `depart`, `entrepot`, `arrivee`, `arrivelat`, `arrivelong`, `statut`) VALUES ('livraison 4', '2024-08-16 00:00:00', 4, '2024-08-17 00:00:00', 45.75, 4.85, 'En attente');

INSERT INTO `error` (`id`, `titre`, `texte`) VALUES (404, 'Erreur 404', 'Page non trouvée');
INSERT INTO `error` (`id`, `titre`, `texte`) VALUES (500, 'Erreur 500', 'Erreur interne');

INSERT INTO `ticket` (`titre`, `statut`, `tag`, `priority`) VALUES ('Problème de connexion', 'En cours', 'Connexion', 'Moyenne');
INSERT INTO `ticket` (`titre`, `statut`, `tag`, `priority`) VALUES ('Problème de livraison', 'En cours', 'livraison', 'Haute');
INSERT INTO `ticket` (`titre`, `statut`, `tag`, `priority`) VALUES ('Problème de paiement', 'En cours', 'Paiement', 'Basse');
INSERT INTO `ticket` (`titre`, `statut`, `tag`, `priority`) VALUES ('Problème de stock', 'En cours', 'stock', 'Haute');
INSERT INTO `ticket` (`titre`, `statut`, `tag`, `priority`) VALUES ('Problème de service', 'En cours', 'Service', 'Moyenne');
INSERT INTO `ticket` (`titre`, `statut`, `tag`, `priority`) VALUES ('Problème de site', 'En cours', 'Site', 'Basse');
