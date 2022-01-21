#!groovy

node('jerry') {
  stage ('Checkout') {
    checkout scm
  }

  stage('Check Env Parameters'){
    echo "Branch Name : ${env.GIT_BRANCH}"
    echo "Octo Server Address : ${env.octoServer}"
  }
}