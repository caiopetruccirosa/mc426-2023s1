.PHONY: up db client server build_client build_server down clean

up: install_client install_server
	docker compose up

client: build_client install_client
	docker-compose run --rm client yarn start

server: db install_server 
	docker-compose run -p 3100:3000 --rm express_server run dev

db:
	docker-compose run -p 5432:5432 -d --rm postgres 

build_client: 
	docker-compose run --rm client build

install_client: 
	docker-compose run --rm client install
	
install_server: 
	docker-compose run --rm express_server install

down:
	docker-compose down

clean:
	docker-compose down --remove-orphans --volumes
