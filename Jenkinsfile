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
        sh '''echo "Y" | docker system prune -a

docker run -d -P daba-api:latest'''
      }
    }

  }
}