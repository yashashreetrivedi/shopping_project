#Sports Apparel Inc

This is the website for the Sports Apparel Inc and the API and the instructions on how to download and use will be found below.


Getting Started

These instructions will get you a copy of the project up and running on your local
machine for development and testing purposes.

##First

####Download the Sports apparel website

Open the Terminal on your computer and copy the command below:

`git clone git@git.catalystitservices.com:MDW_2018_/team_plates/team_plates-frontend.git`

##Second

After you have cloned the repository, make sure you clone down and then change directories
into the team_plates-db.

`git clone git@git.catalystitservices.com:MDW_2018_/team_plates/team_plates-db.git`

after you have completed the cloning,  follow the commands below to build the database
on your computer. This is important! Make sure you install docker first as it is necessary for 
the following steps. Docker.


##Using the Docker Image

The following sections outline the use


##Building The Docker Image

docker build -t scdb .            

docker run -d -p 27017:27017 --name scdb scdb        

##Connecting to MongoDB

You can use MongoDB Compass, RoboMongo, or the Terminal to connect to the
running MongoDB instance. All collections are located in the 'gcdb' database.
We would recommend using Kitematic to find the port on localhost that your
MongoDB is running on, as it may differ from one device to another.

##In a terminal window:

$ docker exec -it scdb mongo - will connect to the running container and start the mongo shell.
`...
> show databases
    admin
    scdb
    local
> type your commands here...
`

##For MongoDB Compass:

Use Docker's Kitematic GUI to find the port your instance of this container
is runnning on. Enter this port into Compass under the field that asks for the
localhost port. You should be able to view the database through Compass.

##Third 

Clone down the team_plates-backend.

`git@git.catalystitservices.com:MDW_2018_/team_plates/team_plates-backend.git`

After you have completed that Open the TTY_gcAPI inside your Java IDE. Navigate
 to the GCAPI_runner file and run the application as a java project to start the server.

##Fourth
Navigate to the React folder. Once inside type the following command

npm install

npm start
This should open a tab inside of your chosen web browser.
If not, just type into the Navigation of your browser the following link

http://localhost:3000

Congrats! you have successfully started the application.
If there are any questions please feel free to contact me.


##End notes

Authored by: Tyler Bridges, Anna McCormack, Yasharee Trivedi, Myron Castillo, Isaac Castillo