# Aşama 1: Build
FROM maven:3.8.4-openjdk-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package

# Aşama 2: Run
FROM openjdk:21-jdk-slim
WORKDIR /app
COPY --from=build /demo1-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
EXPOSE 8080
