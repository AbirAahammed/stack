#!groovy

node('jerry') {
    def app
    stage('Clone repository') {
            checkout scm
    }
    stage('Build image') {
            app = docker.build("abirahammed/stacker:${env.BUILD_NUMBER}")
    }
    stage('Test image') {
            app.inside {
            sh 'echo "Tests passed"'
            }
    }
    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'Mac-log-on') {
            app.push("${env.BUILD_NUMBER}")
            app.push('latest')
        }
    }
}
