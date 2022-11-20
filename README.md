# Laravel Performance UI

## Setup Instructions

- Navigate into project directory
    ```bash
    cd laravel-performance-ui
    ```
- Install composer packages
    ```bash
    composer install
    ```
- Create `.env` file
    ```bash
    cp .env.example .env
    ```
- Generate application key
    ```bash
    php artisan key:generate
    ```
- Serve application on port `8000`
    ```bash
    php artisan serve --port=8001
    ```
- Access application within browser on URL `http://localhost:8000/`
