#!/bin/sh

cd /var/www

if [ ! -d "vendor" ]; then
    echo "Instalando dependências do Composer..."
    composer install --no-interaction --no-progress --prefer-dist
fi


chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Executa o comando principal do contêiner (php-fpm)
exec "$@"