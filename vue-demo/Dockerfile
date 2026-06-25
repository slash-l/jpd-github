FROM demo.jfrogchina.com/slash-docker-test-local/node-jf:v1.0.0 AS builder
USER root
ARG ENV_VAR
ARG BUILD_NAME
ARG BUILD_NUMBER

WORKDIR /src
COPY package.json ./

# 直接用 jf npm install，无需重新安装/配置 CLI
RUN jf c use artifactory

RUN jf npm install \
      --build-name=${BUILD_NAME} \
      --build-number=${BUILD_NUMBER}

RUN jf npm publish --build-name=${BUILD_NAME} --build-number=${BUILD_NUMBER}

COPY . .
RUN jf npm run build:${ENV_VAR}

RUN jf rt build-collect-env ${BUILD_NAME} ${BUILD_NUMBER}

RUN jf rt bp ${BUILD_NAME} ${BUILD_NUMBER}

FROM nginx AS final
USER root
COPY .cicd/nginx.conf /etc/nginx/nginx.conf
WORKDIR /data/frontend
COPY --from=builder /src/dist .

EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]
