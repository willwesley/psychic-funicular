# Container example things

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
