import Home from './Home'
import About from './About'
import Blog from './Blog'

export default function Content(props) {
  const currentPage = props.state.currentPage;
  return <div>{
    currentPage === 'home'  ? <Home  />:
    currentPage === 'about' ? <About />:
    currentPage === 'blog'  ? <Blog handleClick={props.handleClick} currentPost={props.state.currentPost}/>:
    currentPage
  }</div>
}
