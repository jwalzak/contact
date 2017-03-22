create database lamp2contacts charset=utf8;
use lamp2contacts;

CREATE TABLE `addresses` (
  `addr_id` int(20) NOT NULL AUTO_INCREMENT,
  `addr_first_name` varchar(50) DEFAULT NULL,
  `addr_last_name` varchar(50) DEFAULT NULL,
  `addr_city` varchar(50) DEFAULT NULL,
  `addr_region` varchar(50) DEFAULT NULL,
  `addr_email_1` varchar(128) DEFAULT NULL,
  `addr_email_2` varchar(128) DEFAULT NULL,
  `addr_phone_1` varchar(254) DEFAULT NULL,
  `addr_phone_2` varchar(254) DEFAULT NULL,
  PRIMARY KEY (`addr_id`),
  KEY `first_name` (`addr_first_name`),
  KEY `last_name` (`addr_last_name`),
  KEY `email_1` (`addr_email_1`),
  KEY `email_2` (`addr_email_2`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ;

grant select, insert, delete, update on lamp2contacts.* to 'lampuser'@'localhost' identified by '!lamp2!';
grant select, insert, delete, update on lamp2contacts.* to 'lampuser'@'127.0.0.1' identified by '!lamp2!';
