create database db34;
use db34;
create table users ( name varchar(34), email varchar(34), password varchar(34) );
insert into users values ("bob","bob@bob.com","secrets, wow"), ("lois","lois@lane.edu","2124rgwvwc");
insert into users values ("ken","ken@barbieland.com","patriarchy"), ("joju","chewbacca@every.io","5jynrgb234tgrve");

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

