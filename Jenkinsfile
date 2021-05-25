node {
    def image_name = "bloodlibrary-frontend"
    def image = null

    stage('Checkout') {
        checkout scm
    }

    stage('Build app image') {
        image = docker.build("${image_name}:${env.BUILD_ID}")
    }

    stage('Deploy'){
        try{
            sh "docker stop ${image_name} && docker rm ${image_name}"
        }catch(Exception e){
            echo e.getMessage()
        }

            def runArgs = '\
--network HTTP_SERVICES \
--ip 172.18.0.5 \
--restart unless-stopped \
--name ' + image_name

            def container = image.run(runArgs)
    }
}
