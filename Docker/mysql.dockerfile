FROM mysql:8

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=someDataBase
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin

COPY /sql/init.sql /docker-entrypoint-initdb.d/

RUN chmod -R 777 /docker-entrypoint-initdb.d

EXPOSE 3306