pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start Server') {
            steps {
                bat 'start /B node index.js > node_output.log 2>&1'
            }
        }

        stage('Health Check') {
            steps {
                bat 'timeout /t 5 >nul'
                bat 'curl http://localhost:3000'
            }
        }
    }
}
