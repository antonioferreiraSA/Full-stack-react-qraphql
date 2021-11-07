![logo](./logo.png)

# Overview

This is the assessment that was sent to me by  SovTech, it is a full-stack assessment requiring me to develop both the frontend with (React,)  and backend using grapgql.

# Project Structure

The project is managed with Yarn and Yarn Workspaces. It is mono-repo housing 2 seperate projects, the React frontend and the server on Apollo GraphQL backend.

Click links below to read documentation on how to get started.


# Local development
Fork repository:  at [antonioferreiraSA/Full-stack-react-qraphql].(https://github.com/antonioferreiraSA/Full-stack-react-qraphql).

# Install Node.js dependencies

install all dependencies 

 $ cd /client 
 $ yarn install
 ![logo](11.png)

 ![logo](../../assets/img/1 .png)

 then create a .env file the place this code

  SKIP_PREFLIGHT_CHECK=true
 ![logo](../7.png)


# Start local server
 This will start the React front-end

 $ yarn start
 ![logo](../../assets/img/2.png)

 it will automatically open  http://localhost:3000/
 ![logo](../../assets/img/3.png)

 Dont worry if you only see a pciture with a error under it saying (Somthing went wrong ) this is becasue we need to startup the backend grapql server.

 # Start  backend grapql  server

  cd out of  the client folder to the root folder like this
  $ cd ..
 ![logo](../../assets/img/4.png)

 # Install Node.js dependencies
  $ yarn install

 ![logo](../../assets/img/5.png)

 $ cd src
 ![logo](../../assets/img/6.png)

 then to run it you need to install ts-node to run a typescript file 
 ![logo](../../assets/img/7.png)

 once done we ready to run the server
  $ ts-node index.ts

 ![logo](../../assets/img/9.png)


 we can now go back to our front-end  server and everything should work  http://localhost:3000/

 it should show you  this : 

 ![logo](../../assets/img/10.png)


 thank you very much for your time. 


























 


 










