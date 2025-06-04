pipeline {
  agent any

  environment {
    VERCEL_TOKEN = credentials('VERCEL_TOKEN')
  }

  stages {
    stage('Instalar Node.js') {
      steps {
        sh '''
          curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
          apt-get install -y nodejs
        '''
      }
    }

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
