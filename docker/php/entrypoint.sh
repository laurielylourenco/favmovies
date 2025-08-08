#!/bin/sh

cd /var/www

if [ ! -d "vendor" ]; then
    echo "Instalando dependências do Composer..."
    composer install --no-interaction --no-progress --prefer-dist
fi


echo "Rodando as migrações do banco de dados..."
php artisan migrate --force

# Executa o comando principal do contêiner (php-fpm)
exec "$@"