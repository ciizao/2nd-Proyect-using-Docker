# Message whith Javascript
## Results

<p align="center">
    <img src="Public/Images/Resultado.png" alt="Result ">
</p>

This is a program that presents a message on the web with Javascript

## :open_book: Repository on Github
* Clone the repository

    ```
    git clone https://github.com/ciizao/2nd-Proyect-using-Docker.git
    ```

## :rocket: How to run in docker
### Pre-requisites
* Docker - DockerDesktop installed
* DockerHub account
### Download image

*Image in the DockerHub repository and how to use it
```
https://hub.docker.com/repository/docker/ciizao/2nd-proyect-using-docker-javascript
```
```
docker pull ciizao/2nd-proyect-using-docker-javascript
```
> [!IMPORTANT]
> By default, port 3000 is the one assigned to open the web page
### Run image
```
docker run --name <NEWCONTAINERNAME> -p 3000:3000 <IMAGENAME>
```
> [!TIP]
> The name of the downloaded image must match the one placed in the previous command, for this you can verify it using the **docker images** command. Additionally, you must check that there is no other container with the same name as the one placed in the command.
### View the results
Open new window browser and search localhost:3000

[View results](#results)

## :light_rail: PAAS Deploy with docker (Railway)
For its deployment in a PAAS we will rely on railway and its easy implementation thanks to its container management. 

![Railway Service](Public/Images/Rarlway1.png "Service")

> [!IMPORTANT]
> Next, the configuration that we must add is the generation of a domain along with the desired port, in this case the indicated thing would be to point to port 3000

![Generate Domain](Public/Images/Rarlway2.png "Domain")

### View the results

>This is the result of deploying in Railway through the created domain
![Result Railway](Public/Images/RarlwayResult.png "Domain")


Link Railway App
[Message](http://2nd-proyect-using-docker-production.up.railway.app "click for visit")