create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

insert into user(id, email, password)
values
  (1, "jdoe@mail.com", "123456");

insert into item(id, title, user_id)
values
  (1, "Stuff", 1),
  (2, "Doodads", 1);

  CREATE TABLE category (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
  );

  CREATE TABLE program (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    synopsis TEXT NOT NULL,
    poster VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category(id)
  );


  insert into category(id, name)
values
  (1, "Comédie"),
  (2, "Science-Fiction"),
  (3, "Drame"),
  (4, "Policier"),
  (5, "Aventure"),
  (6, "Fantastique"),
  (7, "Romance");

insert into program
  (
    id,
    title,
    synopsis,
    poster,
    country,
    year,
    category_id
  )
values
  (
    1,
    "The Good Place",
    "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
    "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
    "USA",
    2016,
    1
  ),
  (
    2,
    "Dark",
    "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
    "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
    "Allemagne",
    2017,
    2
  ),
  (
    3,
    "Breaking Bad",
    "Walter White vit à Albuquerque, Nouveau-Mexique. Il est un modeste professeur de chimie au lycée. Il peine à subvenir aux besoins de sa famille. Mais après avoir été diagnostiqué d’un cancer du poumon inopérable, il n’a pas d’autres choix que de trouver une autre parade. Il décide de fabriquer de la méthamphétamine avec son ancien élève Jesse Pinkman dans un camping-car transformé en laboratoire. Leur marché se développe très rapidement. Peut-être trop rapidement pour Walter qui se transforme en véritable parrain de la drogue. Il doit donc gérer son nouveau statut et essayer de mener à bien son rôle de père de famille, de mari, et de malade ! Surtout qu’il cache son activité à sa femme, Skyler. Walter prend le nom  Heisenberg pour masquer son identité.Son beau-frère Hank Schrader, les gangs locaux et les cartels de la drogue mexicains sont ses nouveaux ennemis.",
    "https://img.betaseries.com/tYhxRqHnq_yk0MmEYCIBOt_gS3Y=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F287956ed96886a8debc1b42c82a0a828.jpg",
    "USA",
    2008,
    3
  ),
  (
    4,
    "Les Soprano",
    "Tony Soprano (James Gandolfini), un gangster italo-américain basé dans le nord de Jersey, tente d'équilibrer sa vie de famille avec son rôle de patron de la famille Soprano. Souffrant d'attaques de panique, Tony s'engage dans des séances de thérapie avec la psychiatre Jennifer Melfi (Lorraine Bracco) par intermittence tout au long de la série.",
    "https://img.betaseries.com/r02K3TV4VQsTCnlsSwSt-FA6yzg=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fe4327040a25861ff956c71e13031a1f2.jpg",
    "USA",
    1999,
    4
  ),
  (
    5,
    "Game of Thrones",
    "Sur les terres de Westeros, le roi Baratheon domine le Royaume des Sept Couronnes. À la mort de son conseiller, Jon Arryn, il demande à son vieil ami Ned Stark de le remplacer. Avant de partir pour la capitale avec ses filles, Sansa et Arya, son fils est tué. On accuse alors Tyrion Lannister. La guerre des clans ne fait que commencer.",
    "https://img.betaseries.com/ehxvwkVLO2NcKcpevl3lfk_5c-M=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F4d09984be7bf0c385b21e2974bc12e8b.jpg",
    "USA",
    2011,
    5
  );

