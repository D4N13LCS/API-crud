FROM mysql:8.0

COPY /sql/init.sql /docker-entrypoint-initdb.d/

RUN chmod -R 777 /docker-entrypoint-initdb.d

EXPOSE 3306