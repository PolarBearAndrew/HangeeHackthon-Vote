# HangeeHackthon-Vote

For Hackthon 6th final vote. 

## pre-install

 * node.js@0.10.26
 * npm
 * [mongojs](https://github.com/mafintosh/mongojs)
 * [express@4.11.1rc](http://github.com/strongloop/express/)

## how to start

```
npm start
open http://localhost:9999
```

## api

Get all project info
```
[GET]  /api/project/
```

Get project with _id
```
[GET]  /api/project/:id
```

Add a new project
```
[POST]  /api/project/new
```

Vote a project with _id
```
[PUT]  /api/project/vote/:id
```

Get all vote log 
```
[GET]  /api/voteLog/
```

Add a vote log
```
[POST]  /api/voteLog/add/:pid/:uid
```





##include

 * [jade](http://jade-lang.com/)
 * [bootstrap](http://getbootstrap.com/)
 * [jquery](http://jquery.com/)
 * [d3](https://github.com/mbostock/d3)
