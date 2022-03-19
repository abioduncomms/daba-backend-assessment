pipeline {
  agent {
    dockerfile true
  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
        sh 'svn --version'
      }
    }

    stage('Run') {
      steps {
        sh 'docker run -t myapp'
      }
    }

  }
}