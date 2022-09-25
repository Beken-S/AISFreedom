FROM mysql:latest
LABEL org.opencontainers.image.authors="Beken Sarsenbaev <sbeken6@gmail.com>"
ENV MYSQL_DATABASE=ais_freedom
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=4z3DW9JA4p
ENV MYSQL_ROOT_PASSWORD=Fd3xskDmzcdiWNZGHCE4
EXPOSE 3306
COPY dump/ais_freedom.sql /docker-entrypoint-initdb.d/
