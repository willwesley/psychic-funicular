# Container example things

## simple no frills container we made first

Build the container like this:

```bash
docker build -t webserver .
```

Mind the trailing `.`!

Run it like this:

```bash
docker run --rm --name happy_tree --init --publish 5000:3000 webserver
```

For funsies you can also pass the `--detach` or `-d` flag.
Then to stop/kill, say:

```bash
docker kill happy_tree
```

## container that talks to a mysql db!

Build it like this:

```bash
docker build -t mysqlwebserver -f Dockerfile.mysql .
```

Still mind the trailing `.`!

Start the mysql server container from the php example docker compose (in that folder just run `docker-compose up -d`).
Run the nodejs `mysqlwebserver` container like this:

```bash
docker run --rm \
--name happy_tree \
--init \
--publish 5000:3000 \
--network phpnexample_default
mysqlwebserver
```
