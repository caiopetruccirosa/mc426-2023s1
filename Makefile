.PHONY: server
.PHONY: client
.PHONY: db

DOCKER_COMPOSE=$(shell which docker-compose)
NPM=$(shell which npm)
YARN=$(shell which yarn)
DB_LOG_DIR=logs/db
CLIENT_LOG_DIR=logs/client
SERVER_LOG_DIR=logs/server

define start_server = 
	${NPM} --prefix server/ run dev > /dev/null 2> ${SERVER_LOG_DIR}/log.txt &
endef

# SERVER_PROCESS = wiki_forum_server
# CLIENT_PROCESS = wiki_forum_client
# DB_PROCESS = wiki_forum_db

# ac:
# 	yarn --cwd client/client start& npm --prefix server/ run dev& docker-compose -f db/docker-compose.yaml -d

init:
	mkdir -p ${DB_LOG_DIR} ${CLIENT_LOG_DIR} ${SERVER_LOG_DIR}

run: init db server client

db: init
	@echo "Starting db..."
	docker compose -f db/docker-compose.yaml up -d
	@echo "PostgreSQL initiated."

server: init
	@echo "Starting server..."
	@nohup npm --prefix server/ run dev > /dev/null 2> ${SERVER_LOG_DIR}/log.txt &
	@echo "Server initiated."

client: init
	@nohup yarn --cwd client/client start 2> ${CLIENT_LOG_DIR}/log.txt &
	@echo "Client initiated."

clean:
	rm -rf logs/
	docker-compose -f db/docker-compose.yaml down --volumes
