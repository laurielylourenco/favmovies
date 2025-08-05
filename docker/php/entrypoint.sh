#!/bin/sh


chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Executa o comando principal do contêiner (php-fpm)
exec "$@"