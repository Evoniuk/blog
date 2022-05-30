export default function Header(props) {
    return (
      <header>
        <span onClick={e => props.handleClick('home', null)}  className="link">HOME</span>
        <span onClick={e => props.handleClick('about', null)} className="link">ABOUT ME</span>
        <span onClick={e => props.handleClick('blog', null)}  className="link">BLOG</span>
      </header>
    )
}
