pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t daba-api:latest .'
      }
    }

    stage('Deploy') {
      steps {
        sh '''docker system prune

echo y

docker run -d -P daba-api:latest'''
      }
    }

  }
}