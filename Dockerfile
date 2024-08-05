FROM openjdk:21-jdk-slim

ARG JAR_FILE=demo1/*.jar
COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8080
