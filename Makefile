MAIN_DIR=$(PWD)
BACKEND_DIR=$(MAIN_DIR)/backend

check-migration-name:
ifndef MIGRATION_NAME
	$(error Please set MIGRATION_NAME ! Example: make p_migrate MIGRATION_NAME="init")
endif


#start application locally
start_app_locally:
	sudo rsync -avu --delete "./libs/" "./backend/libs"
	docker-compose -f $(MAIN_DIR)/docker-compose.yml up

#prisma migrate
p_migrate: check-migration-name
	docker exec -it stock_management_backend_services npx prisma migrate dev --name $(MIGRATION_NAME)

#start prisma studio
start_p_studio:
	docker exec -it stock_management_backend_services yarn run p-studio

#prisma generate
p_gen:
	cd $(BACKEND_DIR) && yarn run p-gen

#prisma format
p_fmt:
	cd $(BACKEND_DIR) && yarn run p-fmt