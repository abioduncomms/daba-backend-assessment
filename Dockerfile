# FROM node:alpine as build-stage

# #set working directory
# RUN mkdir -p /var/www/app/frontend_admin
# WORKDIR /var/www/app/frontend_admin

# #copy package.json to working dir to prevent reinstallation
# #of npm packages 
# # COPY package*.json /var/www/app/frontend_admin/



# #copy the project into the working dir
# COPY . .

# #run package installations
# RUN npm install



# RUN npm run build

# stage1 as builder
FROM node:10-alpine as builder

ARG BASE_URL
ARG PORT

ENV BASE_URL=${BASE_URL}
ENV PORT=${PORT}

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui

WORKDIR /nextjs-ui

COPY . .

# Build the project and copy the files
RUN npm run build


EXPOSE 3000

CMD ["npm","start"]

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM 127.0.0.1:5000/credicity_mortgage_front_nginx 
# COPY --from=builder /nextjs-ui/out /usr/share/nginx/html

# EXPOSE 8008
# COPY --from=build-stage /var/www/app/frontend_admin/out /usr/share/nginx/html
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
