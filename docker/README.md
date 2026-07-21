## Cheat sheet

```bash
eval $(minikube -p minikube docker-env)

docker network create \
  --driver=bridge \
  --subnet=192.168.2.0/24 \
  --gateway=192.168.2.254 \
  local-bridge

docker-compose up -d

nc -vz $(minikube ip) 4318
# Prometheus UI:
curl -v $(minikube ip):9090
# Zipkin UI:
curl -v $(minikube ip):9411
```
