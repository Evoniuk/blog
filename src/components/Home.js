import SonyaPic from '../images/Sonya.jpeg'

export default function Home() {
  return <div>
      <h2>Welcome!</h2>

      <p>Hi! This is my personal site. I love the idea of the personal site that was big in the early days of the internet, where you got to see so many unique designs and totally meaningless but endlessly interesting tidbits about people all over the world, so I thought I'd make one myself!</p>

      <img src={SonyaPic} alt={"Cat"} />
      <aside>My cat Sonya</aside>

      <p>I have <a href="https://evoniuk.github.io" target="blank">a more serious blog</a> where I post about more respectable topics, so if you wanna check that out please do, but here I plan on just rambling about whatever I want.</p>

      <p>Also, I hope you enjoy the 90s VHS aesthetic I'm goin' for. The font is VCR OSD Mono, and the background is inspired by the icy caverns in Super Mario Bros 3. And the song at the top is '1' by HOME, from his album <cite>Resting State</cite>.</p>
  </div>
}
