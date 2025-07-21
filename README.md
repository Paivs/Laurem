# Laurem

rodar container

docker run -d \
 --name mongodb \
 -p 27017:27017 \
 -e MONGO_INITDB_DATABASE:laurem \
 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
 -e MONGO_INITDB_ROOT_PASSWORD=secret \
 -v mongodb_data:/data/db \
 mongo:latest

docker exec -it mongodb mongosh -u mongoadmin -p secret

db.createUser({
user: "laurem_user",
pwd: "laurem_password",
roles: [
{ role: "readWrite", db: "laurem" },
{ role: "dbAdmin", db: "laurem" }
]
})
