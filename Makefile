.PHONY: up client server build_client build_server down clean

up: build_client build_server
	docker compose up

client: build_client
	docker-compose run --rm client yarn start

server: build_server
	docker-compose run --rm server npm run dev

build_client: 
	docker-compose run --rm client install

build_server: 
	docker-compose run --rm server install

down:
	docker-compose down

clean:
	docker-compose down --volumes
