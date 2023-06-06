.PHONY: all client server build_client build_server down clean

all: client server

client: build_client
	docker-compose run --rm client yarn start

server: build_server
	docker-compose run --rm server npm run dev

build_client: 
	docker-compose run --rm client yarn install

build_server: 
	docker-compose run --rm server npm install

down:
	docker-compose down

clean:
	docker-compose down --volumes
