pipeline {
  agent any
//   tools { node '' }
//   parameters {}
  environment {
    _buildTime = buildTime() // 当前时间戳
    _productFileName = "mini-project-${_buildTime}.tar.gz" // 产物文件名
    _productBackupPath = '/app/backup/marketing/portal' // 产物备份目录
  }
  triggers {
    pollSCM('*/1 * * * *') // 轮询代码仓库（每分钟判断一次代码是否有变化）
  }
  options {
    buildDiscarder(
      logRotator(
        daysToKeepStr: '30', // 构建记录将保存的天数
        numToKeepStr: '10', // 最多此数目的构建记录将被保存
        artifactDaysToKeepStr: '30', // 比此早的发布包将被删除，但构建的日志、操作历史、报告等将被保留
        artifactNumToKeepStr: '10' // 最多此数目的构建将保留他们的发布包
      )
    )
    disableConcurrentBuilds() // 同一个pipeline，Jenkins默认是可以同时执行多次的，此选项为了禁止pipeline同时执行
    // checkoutToSubdirectory('sub') // Jenkins默认拉取源码至工作空间的根目录中，此选项可以指定检出到工作空间的子目录中
    retry(1) // 当发生失败时进行重试（包括第1次失败）
    timestamps() // 添加日志打印时间
    timeout(
      time: 15, // 整型
      unit: 'MINUTES', // 时间单位，默认分钟。支持NANOSECONDS，MICROSECONDS，MILLISECONDS，SECONDS，MINUTES（默认），HOURS，DAYS
      activity: true // 布尔类型，true时 只有当日志没活动才算真正的超时
    )
  }
  stages {
    stage('Env & Param') {
      parallel {
        stage('Env') {
          steps {
            echo "系统当前用户      [${env.USER}]"
            echo "JENKINS_URL     [${env.JENKINS_URL}]"
            echo "WORKSPACE       [${env.WORKSPACE}]"
          }
        }
        stage('Job') {
          steps {
            echo "-------------------- --------------------"
            echo "JOB_NAME         [${env.JOB_NAME}]"
            echo "BUILD_URL        [${env.BUILD_URL}]"
            echo "BUILD_NUMBER     [${env.BUILD_NUMBER}]"

            echo "-------------------- --------------------"
            echo "BRANCH_NAME      [${env.BRANCH_NAME}]"
            echo "GIT_BRANCH       [${env.GIT_BRANCH}]"
            echo "GIT_COMMIT       [${env.GIT_COMMIT}]"

            echo "-------------------- --------------------"
            echo "产物名称          [${_productFileName}]"
            bat   "node -v"
            bat   "npm -v"
          }
        }
      }
    } 
    withEnv(['PATH=C:/Users/lim kia we/AppData/Roaming/npm']) {
      stage('YARN Install') {
        steps {
          bat 'npm install -g yarn --registry=https://registry.npm.taobao.org'
          bat 'yarn install'
        }
      }
    }
  }
}

// 生成当前时间戳
def buildTime() {
  String date = new Date().format('yyyyMMddHHmmss')
  return "${date}"
}
