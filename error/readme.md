1.  블록 범위 변수 'x'을(를) 다시 선언할 수 없습니다.

    현상 : 서로 다른 파일에서 같은 이름의 변수를 선언하면 이런 에러 발생

    원인 : 타입스크립트는 모든 ts 파일을 하나의 모듈로 보기 때문에 이러한 오류가 발생

    해결 :tsconfig.js에

    ```
    {
        "compilerOptions": {
            "moduleDetection": "force"
        }
    }
    ```

    추가

2.  parcel : 이 시스템에서 스크립트를 실행할 수 없으므로 parcel.ps1 파일을 로드할 수 없습니다.

    현상 : parcel index.html이 실행할 시 에러 발생

    원인 : 스크립트 실행 권한이 없음

    해결 :

        1. Window PowerShell을 관리자 권한으로 실행

        2. get-ExecutionPolicy로 권한 확인. Restricted로 되어 있으면 로컬에서 작성한 스크립트를 실행할 수 없음

            Restricted : 스크립트 파일을 실행할 수 없음

            AllSigned : 신뢰할 수 있는(서명된) 스크립트 파일만 실행

            RemoteSigned : 로컬에서 본인이 생성한 스크립트와, 신뢰할 수 있는(서명된) 스크립트 파일 실행

        3. Set-ExecutionPolicy RemoteSigned 로 권한을 변경

        4. get-ExecutionPolicy로 잘 바뀌었는지 확인

        5. parcel 재실행
