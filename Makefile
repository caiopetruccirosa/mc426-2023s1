.PHONY: server
.PHONY: client
.PHONY: db

DOCKER_COMPOSE=$(shell which docker-compose)
NPM=$(shell which npm)
YARN=$(shell which yarn)
DB_LOG_DIR=logs/db
CLIENT_LOG_DIR=logs/client
SERVER_LOG_DIR=logs/server
# SERVER_PROCESS = wiki_forum_server
# CLIENT_PROCESS = wiki_forum_client
# DB_PROCESS = wiki_forum_db

# ac:
# 	yarn --cwd client/client start& npm --prefix server/ run dev& docker-compose -f db/docker-compose.yaml -d

init:
	mkdir -p ${DB_LOG_DIR} ${CLIENT_LOG_DIR} ${SERVER_LOG_DIR}

db: init
	@echo "Starting db..."
	@docker-compose -f db/docker-compose.yaml up -d

server: init
	@echo "Starting server..."
	@nohup npm --prefix server/ run dev > /dev/null 2> logs/db/log.txt &

client: init
	bash -c "exec -a wiki_forum_server (${YARN} --cwd client/client start)"
	yarn --cwd client/client start

clean:
	rm -rf logs/
	docker-compose -f db/docker-compose.yaml down --volumes
