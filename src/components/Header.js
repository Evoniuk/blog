export default function Header(props) {
    return (
      <header>
        <span onClick={e => props.handleClick('home', null)}  className="link">home</span>
        <span onClick={e => props.handleClick('about', null)} className="link">about me</span>
        <span onClick={e => props.handleClick('blog', null)}  className="link">blog</span>
      </header>
    )
}
