export default function Write() {
  // if(session){
  //   return(<div></div>)
  // }else {<div>
  //   로그인하세요
  // </div>}

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="title"></input>
        <input name="content" placeholder="content"></input>
        <button type="submit">test</button>
      </form>
    </div>
  );
}
