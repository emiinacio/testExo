insert into "USERS" (id_user,email,password,username,name)
values (default,'admin@email.com','$2a$10$vEa2qf8meCZNNQ2/.VOQHu3cwhAEhU8dliKezus3eMKTdqdS2gGqq','admin','');

insert into ROLE (id_role,name)
values
(default, 'ADMIN'),
(default, 'USER')
;

INSERT INTO USER_ROLE (id_role_fk, id_user_fk)
SELECT r.id_role, u.id_user FROM ROLE as r join USERS as u
WHERE u.username='admin';
