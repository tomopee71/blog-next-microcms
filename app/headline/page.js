// 引数はpropsでもfooでもなんでもよい
export default function Headline(props) {
  
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.page}</p>
    </div>
  );
}
