//error시 보여줄 페이지
//최상위 폴더에 만드는게 좋음 왜냐하면 에러나서 옆에 error.js없으면 상위폴더뒤짐
//무조건 클라이언트 컴퍼넌트로 만들어야함
"use client";

export default function Error() {
  return <h4>에러남 ㅅㄱ</h4>;
}
