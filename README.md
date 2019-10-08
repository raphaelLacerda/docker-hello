* Criar o template de Dashboard
* Criar o template de usuari
* Pegar o Token
* kubectl proxy
    * vai subir o dashboard na 8081


## Deployment

kubectl create deployment hello-node --image=hello-node

## Service
kubectl expose deployment hello-node --type=LoadBalancer --port=8080