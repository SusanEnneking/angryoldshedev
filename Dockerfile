FROM mysql:8.0

COPY ./database /docker-entrypoint-initdb.d
RUN chmod -R 775 /docker-entrypoint-initdb.d

EXPOSE 3306