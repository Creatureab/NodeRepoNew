pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/Creatureab/NodeRepoNew.git', branch: 'main'
            }
        }

        stage('Verify index.js') {
            steps {
                bat '''
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Stop Existing App') {
    steps {
        bat '''
            for /F "tokens=5" %%a in ('netstat -a -n -o ^| findstr :8082') do taskkill /F /PID %%a
        '''
        }
    }


        stage('Run App') {
            steps {
                bat 'npm start > app.log 2>&1'
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
