# docker-test

Example of a server using docker containers to test the functionality of connect a mongo database and store the data in volumes.

### Install dependencies

```bash
npm install
```

### Add environment variables

```bash
DB_USER=
DB_PASSWORD=
DOMAIN=<CONTAINER-DB>
```

### Create custom container
```bash
docker compose -f docker-compose-dev.yml up
```

### Remove container
```bash
docker compose down
```