# PHP + Mysql example thing

For the most part you didn't need to understand anything in here.
Now you do.

`Dockerfile`: from an existing php container, we install the mysqli extension.
Build with `docker build -t stupidphp .` or use `docker-compose build php`.

`docker-compose.yml`: declaration of a configuration of services.
See embedded comments for more enlightenment.

The `index.html`, `index.php`, and `mysql.php` were all demos in class early in semester.

`data`: holds initialization SQL for MySQL container.
