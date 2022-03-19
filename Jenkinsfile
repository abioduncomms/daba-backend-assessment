pipeline {
  agent {
    dockerfile {
      filename 'docker'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh 'echo "Hello world"'
      }
    }

  }
}