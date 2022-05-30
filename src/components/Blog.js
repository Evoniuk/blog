// import Pokemon    from './posts/Pokemon'
import Moby       from './posts/Moby'
import Serfdom    from './posts/Serfdom'
import Cello      from './posts/Cello'
import Heather    from './posts/Heather'
import Algorithms from './posts/Algorithms'
import Choplifter from './posts/Choplifter'
import Games      from './posts/Games'
import Quine      from './posts/Quine'

export default function Blog(props) {
  const posts = [
    'THOUGHTS ON MOBY DICK',
    'SERFDOM',
    "RANKING BACH'S CELLO SUITES",
    'HEATHER',
    "'WHAT ALGORITHMS WANT' IS A BAD BOOK",
    "DON'T TRUST EVERYTHING YOU READ",
    "ARE GAMES ART?",
    "THE SHORTEST QUINE C"
  ];

  const dates = [
    '2019 02 08',
    '2019 03 17',
    '2019 06 09',
    '2019 08 11',
    '2020 09 06',
    '2021 02 13',
    '2021 06 13',
    '2021 07 05'
  ];

  const makeTitle = number => <li>
    {dates[number]}
    <span
      onClick={e => props.handleClick('blog', posts[number])}
      className='link'>
        {posts[number]}
    </span>
  </li>

  const postList = [];
  for (let i = 0; i < posts.length; i++)
    postList.push(makeTitle(i));

  const blogHome = <div>
    <h2>BLOG</h2>

    <ul>{postList.reverse()}</ul>
  </div>;

  return (
    props.currentPost === posts[0] ? <Moby />       :
    props.currentPost === posts[1] ? <Serfdom />    :
    props.currentPost === posts[2] ? <Cello />      :
    props.currentPost === posts[3] ? <Heather />    :
    props.currentPost === posts[4] ? <Algorithms /> :
    props.currentPost === posts[5] ? <Choplifter /> :
    props.currentPost === posts[6] ? <Games />      :
    props.currentPost === posts[7] ? <Quine />      :
    blogHome
    )
}
