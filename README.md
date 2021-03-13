# <span style="color:blue">Stacker :rocket:

## :book: <span style="color:blue">Introduction 
This app is a streamlined version of stackoverflow coupled with faster speed and better performance.
All Links:
### GitHUB: https://github.com/AbirAahammed/stack
### DockerHUB: https://hub.docker.com/repository/docker/abirahammed/stacker/general
### Live app: https://armoured.web.app/

## <span style="color:blue">Objective 
1.  Upon giving  tag, (a valid one) the app shall show the list of most voted questions for that tag and also the newest question all as one unified list ordered by creation date.
2.  Upon checking a question it will open like an accordion and show the details of the question and all its answers along with all relevant comments.

## <span style="color:blue">:thumbsup: Features
1.  Upon giving valid tag get 10 the most voted question from stackoverflow from last week
2.  Upon giving valid tag get 10 most recent question
3.  Shows loading time of retrieval at the bottom


## <span style="color:blue">:watch: Time 
It is shown in ms (millisecond) in the bottom of the page.

## <span style="color:blue">Project Management
For project management we used GItHub, In github the primary tools we used:
Issues
Wiki
Board
This helped us to stay on track and bug fixes in the last to release.


## <span style="color:blue">Deployment
### Docker Hub 
With my previous experience docker hub implementation was simple, but more efficient use of dockerfile was interesting. The dockerfile.prod file holds all the information needed for prod deploy. To run a container using my docker image located at Sacker. Use the following information:

Repo: https://hub.docker.com/repository/docker/abirahammed/stacker
Instruction: 
	Pull: 	
docker pull abirahammed/stacker:1.2 or 
docker pull abirahammed/stacker:latest
Note: 1.2 and latest are same image, and 1.2 is the latest release
Run  a container:
		docker run -it -d -p <host-port>:80 abirahammed/stacker:<tag>
		 The host-port is the port you want to use to access the container. And tag is either latest or 1.2 whichever you pulled from dockerhub.
### :fire: Firebase 
I also have deployed the same app in [firebase](https://armoured.web.app/). The url is : https://armoured.web.app/


## :end: Conclusion 
While testing if too many api calls are made from one IP the service may stop, and stacker will only show a loading screen. You can test the app in firebase. It has the same functionality and competitive performance. 



## Docker Build instruction

### Docker Prod Build
* docker build -f Dockerfile.prod -t stacker:\<tag\>
### Docker run
* docker run -it -d -p \<host-port\>:80 abirahammed/stacker
