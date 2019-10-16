## Team_Plates database

First clone the repo down with the following command: 

```
git clone git@git.catalystitservices.com:MDW_2018_/team_plates/team_plates-db.git
```

and then cd into that directory

```
cd team_plates-db
```
In the command line run the following commands:

```
docker build -t scdb .            

docker run -d -p 27017:27017 --name scdb scdb        

docker exec -it scdb mongo

```

This will successfully create a database that will be up and running. Make sure that "scdb" is running before you do anything else on the front-end or back-end.