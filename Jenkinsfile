pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t daba-api:$1 .'
      }
    }

    stage('Deploy') {
      steps {
        sh '''

docker run -d -P daba-api:latest'''
      }
    }

  }
}