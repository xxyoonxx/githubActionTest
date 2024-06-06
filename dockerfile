# node.js 버전 지정
from node:20.14.0
# 컨테이너 내 작업 디렉토리 설정
workdir /usr/src/app

# 패키지 파일을 컨테이너에 복사
copy package*.json ./

# 소스 코드 작업 디렉토리로 복사
copy . .
run npm install
expose 3000
cmd ["node","server.js"]