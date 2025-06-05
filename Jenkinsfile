pipeline {
  agent any

  environment {
    VERCEL_TOKEN = credentials('vercel_token') // Debe estar configurado en Jenkins (tipo "Secret Text")
  }

  stages {
    stage('Clonar repositorio') {
      steps {
        git branch: 'develop', url: 'https://github.com/Alyri03/Frontend-Herramientas.git'
      }
    }

    stage('Instalar dependencias') {
      steps {
        sh 'npm install'
        sh 'npm install vercel' // Instalación local
      }
    }

    stage('Desplegar a Vercel') {
      steps {
        sh 'npx vercel --prod --token=$VERCEL_TOKEN --yes'
      }
    }
  }
}
