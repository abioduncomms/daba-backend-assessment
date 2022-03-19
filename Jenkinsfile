pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t daba-api .'
      }
    }

    stage('Test') {
      steps {
        sh 'node -v'
      }
    }

  }
}