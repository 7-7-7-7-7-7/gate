docker-build:
	sudo docker build --shm-size 1G --no-cache -t gate .

docker-down:
	sudo docker rm $(sudo docker stop $(sudo docker ps -a -q --filter ancestor=gate --format="{{.ID}}"))

docker-up:
	sudo docker run --detach \
  --name gate \
  --env "VIRTUAL_HOST=thie.dev" \
  --env "VIRTUAL_PORT=3000" \
  --env "LETSENCRYPT_HOST=thie.dev" \
  --env "LETSENCRYPT_EMAIL=rodolfo@thie.dev" \
  gate

deploy:
	docker-build docker-down docker-up

.PHONY: docker-build docker-down docker-up deploy
