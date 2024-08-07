FROM openjdk:17-jdk-slim
ARG JAR_FILE=demo1-0.0.1-SNAPSHOT.jar
COPY target/${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080
