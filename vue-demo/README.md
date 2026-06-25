


# 构建并推送基础镜像到 Artifactory（只做一次，或 CLI 版本更新时重建）
注入环境参数
```
export JFROG_URL=<JPD URL>
export JFROG_TOKEN=<access token>
```

构建带 JF CLI 的基础 docker 镜像
```

docker build -f Dockerfile.base \
  --build-arg JFROG_URL=$JFROG_URL \
  --build-arg JFROG_TOKEN=$JFROG_TOKEN \
  -t demo.jfrogchina.com/slash-docker-test-local/node-jf:v1.0.0 .

docker push demo.jfrogchina.com/slash-docker-test-local/node-jf:v1.0.0
```

# 日常构建（不需要再下载 JF CLI 和 config）
```
jf docker build \
  --build-arg ENV_VAR=dev \
  --build-arg BUILD_NAME=slash-docker-vue-demo \
  --build-arg BUILD_NUMBER=16 \
  -t demo.jfrogchina.com/slash-docker-test-local/vue-demo:1.7.0 . \
  --build-name=slash-docker-vue-demo --build-number=16

jf docker push demo.jfrogchina.com/slash-docker-test-local/vue-demo:1.7.0 \
  --build-name=slash-docker-vue-demo \
  --build-number=16

jf rt build-add-git slash-docker-vue-demo 16

jf rt bp slash-docker-vue-demo 16
```
