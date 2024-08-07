# Base image
FROM openjdk:17-jdk-slim
ARG JAR_FILE=/*.jar
COPY /demo1-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080

