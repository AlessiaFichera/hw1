/*CREATE database hw1;
use hw1;
CREATE TABLE users (
    id integer primary key auto_increment,
    username varchar(16) not null unique,
    password varchar(255) not null,
    email varchar(255) not null unique,
    name varchar(255) not null,
    surname varchar(255) not null
) ;
CREATE TABLE recensione (
    id integer primary key auto_increment,
    username_recensione varchar(16) not null unique,
    Data date not null,
	parco varchar(255) not null unique,
    recensione varchar(255) not null,
    esperienza varchar(255) not null,
    INDEX new_username( username_recensione),
	FOREIGN KEY ( username_recensione) REFERENCES users(username)
) ;
CREATE TABLE attrazioni (
    id int(11) PRIMARY KEY ,
    nome_attrazione  VARCHAR(255) not null ,
    Url_immagine varchar(255) DEFAULT NULL
);
INSERT INTO attrazioni (id, nome_attrazione, Url_immagine) VALUES
(1, 'Jungle Splash', 'https://etnaland.eu//et_materials/images/attrazioni/jungle-splash/mob/jungle-splash_01.jpg'),
(2, 'The School', 'https://etnaland.eu//et_materials/images/attrazioni/the-school/mob/the-school_01.jpg'),
(3, 'Crocodile Rapids', 'https://etnaland.eu//et_materials/images/attrazioni/crocodile-rapids/mob/crocodile-rapids_01.jpg'),
(4, 'Laser Show', 'https://etnaland.eu//et_materials/images/attrazioni/lasershow/mob/laser-show_01.jpg'),
(5, 'Dragon River', 'https://etnaland.eu//et_materials/images/attrazioni/dragon-river/mob/Dragon-River_01.jpg'),
(6, '1900 th', 'https://etnaland.eu//et_materials/images/attrazioni/1900th/new/mobile/1900_01_576.jpg');*/

CREATE TABLE likes (
	 id_foto integer,
	 username varchar(16) not null,
     INDEX new_username(username),
     foreign key (username) REFERENCES users(username),
     INDEX new_id_foto(id_foto),
	 foreign key(id_foto) REFERENCES attrazioni (id)
     );
     
     

