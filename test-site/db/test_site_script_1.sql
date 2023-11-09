BEGIN TRANSACTION; 



create table users (
id int identity primary key,
login nvarchar(16) not null unique constraint CK_log_without_spaces check(login not like '% %'),
password nvarchar(258) not null constraint CK_pw_without_spaces check(password not like '% %'),
registered bit default 1, -- constraint FK_usr_registered foreign key references messages (registered) -- Чтобы при логине выдавалась эта 1, а не var из T-SQL
email nvarchar(256) not null constraint CK_email_users check(email like '%@%'),
name nvarchar(120) not null,
surname nvarchar(120) not null,
dateofbirth date not null CONSTRAINT CK_user_Age CHECK(datediff(month, dateofbirth, (CONVERT (date, SYSDATETIME() ) ) ) >= 192), --проверка на 16-летие
sex char(1) constraint CK_sex check(sex in ('','m','f'))
);


create table messages (
id int identity primary key,
name nvarchar(120) not null,
message nvarchar(400),
dateofmsg date not null default FORMAT(SYSDATETIME(),'yyyy-MM-dd hh:mm'),
email nvarchar(256) not null constraint CK_email_msg check(email like '%@%'),
registered bit --   constraint FK_msg_registered foreign key references users (registered)
);


create table files (
id int identity primary key,
filename nvarchar(256) not null,
login nvarchar(16) not null,
name nvarchar(120) not null,
surname nvarchar(120) not null,
compowner nvarchar(120),
registered bit default 1,
dateofpost date not null default FORMAT(SYSDATETIME(),'yyyy-MM-dd hh:mm'),
email nvarchar(256) constraint CK_email_file check(email like '%@%'),
textfileblob varchar(max) not null
);



COMMIT TRANSACTION;


select * from users;
select * from messages;
select * from files;

alter table users alter column surname nvarchar(30) collate Cyrillic_General_CI_AS; --такая и так установлена 

alter table users add constraint FK_usr_registered foreign key(registered) references messages(registered);


insert into users (login, password, email, name, surname, dateofbirth, sex) values
('1234', '12345', 'Lli_2022@gmail.com', 'Лёха', 'Ли', '2005-02-05', 'm');

insert into users (login, password, email, name, surname, dateofbirth, sex) values
('12345', '123456', 'Llie_2022@gmail.com', 'Лйоха', 'Лье', '2002-03-05', 'm');

drop table users;
drop table files;

select FORMAT(SYSDATETIME(),'yyyy-MM-dd hh:mm') as sdatetime;