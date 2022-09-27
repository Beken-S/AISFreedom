FROM mysql:8.0

ENV MYSQL_DATABASE=ais_freedom
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=4z3DW9JA4p
ENV MYSQL_ROOT_PASSWORD=Fd3xskDmzcdiWNZGHCE4

COPY ./dump/ais_freedom.sql /docker-entrypoint-initdb.d/
