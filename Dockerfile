FROM openjdk:21-jdk-slim

ARG JAR_FILE=demo1-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} /app.jar

ENTRYPOINT ["sh", "-c", "java -jar /app.jar --server.port=${PORT}"]

EXPOSE 8080
