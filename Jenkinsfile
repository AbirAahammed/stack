#!groovy

node('jerry') {
    def app
    stage('Clone repository') {
            checkout scm
    }
    stage('Build image') {
            app = docker.build('abirahammed/stacker')
    }
    stage('Test image') {
            app.inside {
            sh 'echo "Tests passed"'
            }
    }
    stage('Push image') {
    withDockerRegistry(credentialsId: '25451f03-9f96-4326-abb0-73abd60d8aea', url: 'https://hub.docker.com/repositories') {
            app.push("${env.BUILD_NUMBER}")
            app.push('latest')
        }
    }
}
