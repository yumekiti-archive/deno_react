dc := docker compose -f ./docker/docker-compose.yml

.PHONY: up
up:
	$(dc) up -d --build

.PHONY: down
down:
	$(dc) down

.PHONY: restart
restart:
	@make down
	@make up

.PHONY: rm
rm:
	$(dc) down --rmi all

.PHONY: logs
logs:
	$(dc) logs -f

.PHONY: deno
deno:
	$(dc) exec deno /bin/sh

.PHONY: react
react:
	$(dc) exec react /bin/sh

.PHONY: nginx
nginx:
	$(dc) exec nginx /bin/sh