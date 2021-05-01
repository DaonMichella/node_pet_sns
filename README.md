# node_pet_sns

<주요>
노드 js 설명 
es6 문법 
node.js 실행 원리 
express 서버 구축 
외부 api 사용 프로젝트


# 1장
노드 js : 
  - js 런타임 : 자바스크립트를 구동할 수 있는 환경을 조성해줌. 원래 자바스크립트는 브라우저 기반이었음
  - 이벤트 기반 : 호출스택/백그라운드/태스크 큐 라는 이벤트 기반 시스템을 통해서 코드를 효율적으로 실행 
    1. 실행 순서대로 호출 스택에 쌓음
    2. 백그라운드 필요한 작업은 백그라운드로 이동 (ex) delay 되는 함수
    3. 백그라운드에서 작업이 완료되면 테스큐로 이동
    4. 호출 스택 완료, 이벤트 루프가 테스큐 작업 호출 스택으로 이동
  - 논 블로킹 I/O(input/output) 모델 : 이전 작업이 완료될때까지 기다리지 않고 다음 작업 수행/ 오래 걸리는 작업은 백그라운드에서 처리
  (반대인 블로킹 IO 이해 : 클라이언트가 서버에 요청했을때 걸리는 시간만큼 대기 후 응답함/ 요청 시간 오래걸리면 답이 없음 )
  - 싱글 스레드 : 모든 요청을 실행하는 주체. 하나의 스레드가 작업 처리. 메모리 자원 효율적 사용 가능. 하나의 스레드에 문제 생기면 전체의 문제 (반대로 멀티 스레드는 여러 개의 스레드가 일을 나눠서 처리. 하나의 스레드가 문제 생겨도 다른 스레드로 대체 가능. 스레드간 작업 전환 비용, 스레드 효율적으로 일하지 못함. 요청이 3개를 예상했는데 1개만 들어오면 공백 생김)

  - 장점 : 
   싱글스레드 논블로킹 IO 빠른 속도, 자원을 덜 사용해서 I/o 많은 작업에 유리, 채팅 스트리밍, JS 사용 편의성, 빠르게 개발 가능 생산성 높음 
  - 단점 : 
    싱글 스레드 기반 자원을 많이 먹으면 과부화, CPU 코어 하나만 사용해서 CPU 작업이 많은 게임 서버 부적합, 로직이 복잡하면 콜백 지옥 발생, 에러 발생 시 프로세스가 죽음 

  -적합 : 
  간단한 로직으로 구성되고, 빠른 응답시간, 빠른 개발, 비동기 방식에 어울리는 서비스에 적합(넷플릭스,페이팔, 링크드인,페이스북)
  
  2. 설치 
  - node, vs code 설치
  - vs code extension : 한글팩, ejs snippets, material icon theme


# 2장 es6
  1. var,let,const -> 스코프 차이
    스코프 : 변수 접근 범위
    let : 값 재정의 가능 변수,const : 값 재정의 불가능 변수 (둘다 function scope 아닌 중괄호 스코프)
  2. arrow function : function 키워드보다 간단하게 함수 선언 가능 
  3. 비구조화 할당 : 객체나 배열 안의 값을 추출하고 싶을 때,바로 선언 할 수 있음 {} 안에 값 넣기
    - 객체 
    object = {a :1, b:2}
    const {a,b} = object
    - 배열 
    const array = [1,2]
    const [one,two] = array 
    //변수 one, two 에 array 안의 값 할당 

  4. promise,async, await
   - 비동기 : 코드를 기다리지 않고 바로 실행해서 결과 나옴
   언제 끝날지 몰라서, 순차적으로 진행하기 어려움. 
   - 그래서 CALL BACK 함수 실행
   - new promise 로 생성 then 으로 실행
    function sayHello () {
      return new Promise((resolve, reject){
        const hello = `hello hello`
        //resolve(hello)
        //reject(new Error())
      })
    }
    sayHello().then(resolvedData => {
      console.log(reservedData)
      return resolvedData
      // return 값이 다음 then 의 매개변수로 넘어감
    }).then(resolvedData => {
      console.log(reservedData)
    }).catch((error) => {
      console.log(error)
    })

  - async 
  async function test () {
    const hello1 = await syHello(); // await : 기다렸다가 실행함
  }

# 3장 server
  1. server : 네트워크를 통해 클라이언트의 정보나 서비스 제공하는 주체(응답하는 역할)
  2. 노드로 hello world
  3. localhost : 컴퓨터 내부 주소
  4. Postman : 서버 개발 시, put, get, post, Delete등 매서드 테스트 툴
  5. api 서버 구축 : 요청 을 받고 응답을 보내는 서버가 api 서버

# 4장 express
  1. npm : 개발 시 사용할 수 있는 패키지를 설치/관리하는 툴, 
  2. package.json : 패키지의 의존성 및 버전 관리
  - npm install (-D 인 경우, 개발할떄만 사용하고, 배포시에는 필요없는 패키지 설치시 사용/-G는 모든 패키지에 공통적으로 필요한 패키지 설치시 사용)
  3. 프레임워크 : 프로그램을 만들기 위한 기본 툴
  - express 
  기존에는 1. req.url 파싱 2. req.method 확인 3. 쿼리문 파싱 
  express에서는 1. req.get('경로') 2. req.query로 확인
  
  - express generator을 사용하면 express의 기본 구조를 만들어줌 
    www : 서버를 실행하는 파일 . 포트 번호 지저 ㅇ
    public : img,js,css 리소스 업로드
    routes : 페이지 라우팅과 관련 파일 실제 서버 로직 작성 
    views : 템플릿 파일jade, ejs : html 코드안에 js 코드 작성 가능
    app.js 핵심적인 서버 역할. 라우팅의 시작점
    package.json 의존성 관리 및 버전 관리
  2. 설치 
  npm install -g express express-generator nodemon //패키지 설치
  - express --ejs(템플릿타입) first-project(프로젝트명) //프로젝트 생성
  - npm install 필수 패키지 설치

  3. routing : 요청에 따라 처리함 (url 주소 값에 따라서 해당 router 로 이동시킴)

  4. HTTP Method (GET,POST,PUT,DELETE)
  - GET : 요청한 정보를 READ 하여 응답
  - POST : 요청 자원을 생성
  - PUT : 요청 자원을 수정
  - DELETE : 요청 자원을 삭제

  5. 미들웨어 
  요청 과 응답 사이에 목적에 맞게 작용하는 함수들
  create/update/delete 할때마다 실행되어야하는 함수가 있을때,
  미들웨어에 선언하면 요청 할떄마다 실행 가능
  요청 => 미들웨어가 실행=> 해당 라우터로 이동.
  6. template engine
  ejs : 템플릿 엔진 자바스크립트 코드가 포함된 html 
  <% %> : 자바스크립트 코드 사용 시 사용
  <%= %> : 변수 출력
  <% include 파일명 %> : 모든 페이지에서 사용하는 외부 파일 불러오기

  7. express session 
   - 로그인 시,통신 특성상 상태 저장하지 않음. 해당 유저가 로그인이 된 상태인지 아닌지 확인 할 수 있는 방법이 없음 
   session : 저장이 필요한 정보를 세션에 저장해서 상태를 기록함 
   - express-session 패키지 설치

  # 5장 NO SQL
  1. 데이터 베이스 : 데이터를 구조화 하여 저장시켜 놓은 집합
  2. Query : 데이터 베이스에 정보를 요청하기 위한 명령어 
  3. SQL : 이 쿼리들을 구조화
  4. schema : 어떤 구조, 제약조건으로 저장되어야하는지 정의
  5. noSQL : 스키마가 없어 유연하고 속도가 빠름. 데이터가 일관되지 않아서 단점. Mongoose 라는 패키지를 통해서 스키마를 적용해서 일관성을 보장힘 (협업시 편리하게 하기 위함)
  6. 몽고 디비 : 대표 noSQL. 컬렉션 안에 도큐멘트(데이터)를 저장
  7. 몽구스 : ODM (object document mapping) 객체와 문서를 1:1로 매칭 자바스크립트의 객체와 몽고 디비의 데이터. 데이터를 조회할때 자바스크립트 오브젝트로 바꿔주는 역할을 함 

  클래스 : 하나의 기능을 수행했을때 필요한 변수, 함수를 모아놔서 묶어놓은 문법 new 생성자를 통해서 사용

# 미니 프로젝트
  - JWT 기능을 통한 회원가입 구현/로그인/사용자 정보 확인 후 정보 표시
  세션/쿠키(자동로그인)/JSON Web Token(보안에 강함,인증 단계에서 사용)/
  - aaaa.bbbbb.cccccc
   aaaa: header : 토큰의 유형과 암호화 알고리즘 포함
   bbbbb: payload : 토큰에 담을 정보
   ccccc: signature : secret key를 포함하여 암호화

   - 웹소켓 으로 인해서 요청을 하지 않은 클라이언트에게 정보 전송 가능 
   기존에는 요청을 하는 클라이언트에게만 응답을 보낼 수 있어서 채팅 기능이 구현 어려웠음. socket.io를 통해서 쉽게 웹소켓에 접근 가능