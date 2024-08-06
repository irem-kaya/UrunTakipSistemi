# Stage 1: Build
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app

# Copy the project files
COPY pom.xml .
COPY src ./src

# Package the application
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the packaged application from the build stage
COPY --from=build /demo1-0.0.1-SNAPSHOT.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
