# Gate: v0.1

Gate is my personal portfolio based on Next.js, developed in 2022 and it's programmed to replace Kunst, the oldest version of my portfolio maded in 2020 during the pandemic.


## Deployment

The process is not automated (yet). So, to run this app in the server, please execute the following command:

```shell
$ sudo docker run --detach \
--name gate \
--env "VIRTUAL_HOST=thie.dev" \
--env "VIRTUAL_PORT=3000" \
--env "LETSENCRYPT_HOST=thie.dev" \
--env "LETSENCRYPT_EMAIL=rodolfo@thie.dev" \
gate
```
