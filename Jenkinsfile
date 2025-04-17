pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Make sure "NodeJS" is configured in Jenkins under Global Tools
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/Creatureab/NodeRepoNew.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'nohup node server.js > app.log 2>&1 &'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful'
        }
        failure {
            echo '❌ Deployment Failed'
        }
    }
}
