pipeline {
  agent {
    docker {
      image 'node:18'
      args '-u root' //  ejecuta como root dentro del contenedor
    }
  }

  environment {
    VERCEL_TOKEN = credentials('VERCEL_TOKEN')
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'npm install'
      }
    }

    stage('Desplegar a Vercel') {
      steps {
        sh 'npm install -g vercel'
        sh 'vercel --prod --token=$VERCEL_TOKEN --yes'
      }
    }
  }
}
