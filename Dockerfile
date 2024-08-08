FROM openjdk:17-jdk-slim

# JAR dosyasının proje içerisindeki tam yolunu belirtin
ARG JAR_FILE=build/libs/demo1-0.0.1-SNAPSHOT.jar

# JAR dosyasını container'a kopyalayın
COPY ${JAR_FILE} /app.jar

# Uygulamayı başlatın
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Uygulamanın çalıştığı portu açın
EXPOSE 8080
