CREATE TABLE "Pays" (
	"Nom" VARCHAR UNIQUE,
	PRIMARY KEY("Nom")
);


CREATE TABLE "Ville" (
	"Pays" VARCHAR,
	"Nom" VARCHAR UNIQUE,
	"Adresse" VARCHAR,
	PRIMARY KEY("Nom")
);


CREATE TABLE "Entrepôt" (
	"id" INTEGER NOT NULL UNIQUE,
	"ville" VARCHAR,
	PRIMARY KEY("id")
);


CREATE TABLE "Adhérent" (
	"id" INTEGER NOT NULL UNIQUE,
	"Password" VARCHAR,
	"Abonnement" VARCHAR,
	"Prenom" VARCHAR,
	"Nom" VARCHAR,
	"Mail" VARCHAR,
	"Ville" VARCHAR,
	"Service" VARCHAR,
	PRIMARY KEY("id")
);


CREATE TABLE "Abonnement" (
	"Nom" VARCHAR UNIQUE,
	PRIMARY KEY("Nom")
);


CREATE TABLE "Perks" (
	"id" INTEGER NOT NULL UNIQUE,
	"Nom" VARCHAR,
	"Abonnement" VARCHAR,
	PRIMARY KEY("id")
);


CREATE TABLE "Stock" (
	"id" INTEGER NOT NULL UNIQUE,
	"Ville" VARCHAR,
	"Item" VARCHAR,
	"Quantité" INTEGER,
	PRIMARY KEY("id")
);


CREATE TABLE "Livraison" (
	"id" INTEGER NOT NULL UNIQUE,
	"Collecte" TIMESTAMP,
	"Ville" VARCHAR,
	"Destination" VARCHAR,
	"Statut" VARCHAR,
	"Adresse" VARCHAR,
	PRIMARY KEY("id")
);