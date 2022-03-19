pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t daba-api .'
      }
    }

    stage('Deploy') {
      steps {
        sh '''docker system prune

echo y

docker run -d -P --name api daba-api:latest'''
      }
    }

  }
}