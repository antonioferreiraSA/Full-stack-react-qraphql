![logo](./logo.png)

# Overview

This is the assessment that was sent to me by  SovTech, it is a full-stack assessment requiring me to develop both the frontend with (React, Styled components)  and backend using Graphql.

# Project Structure

The project is managed with Yarn and Yarn Workspaces. It is mono-repo housing 2 seperate projects, the React frontend and the server on Apollo GraphQL backend.

Click links below to read documentation on how to get started.

# Local development

Fork repository: at (https://github.com/antonioferreiraSA/Full-stack-react-qraphql)

# Install Node.js dependencies

install all dependencies

```bash
cd /client
```

```bash
 yarn install
```

then create a .env file the place this code

```bash
SKIP_PREFLIGHT_CHECK=true
```

# Start local server

This will start the React front-end

```bash
yarn start
```

it will automatically open http://localhost:3000/

Dont worry if you only see a pciture with a error under it saying (Somthing went wrong ) this is becasue we need to startup the backend grapql server.

# Start backend Graphql server

The server is in the root directory

# Install Node.js dependencies

This command will install required dependencies listed in package.json.

```bash
yarn install
```

This command will start the server at http://localhost:4000

```bash
 yarn start
```

we can now go back to our front-end   and everything should work  http://localhost:3000/

it should show you  this :

![logo](10.png)
