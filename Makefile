MAIN_DIR=$(PWD)
BACKEND_DIR=$(MAIN_DIR)/backend

#start backend locally
start_backend_locally:
	sudo rsync -avu --delete "./libs/" "./backend/libs"
	docker-compose -f $(MAIN_DIR)/docker-compose.yml up

#prisma migrate
p_migrate:
	docker exec -it stock_management_backend_services yarn run p-migrate

#start prisma studio
start_p_studio:
	docker exec -it stock_management_backend_services yarn run p-studio

#prisma generate
p_gen:
	cd $(BACKEND_DIR) && yarn run p-gen

#prisma format
p_fmt:
	cd $(BACKEND_DIR) && yarn run p-fmt