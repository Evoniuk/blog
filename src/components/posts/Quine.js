export default function Quine() {
  return <div>
    <p>If you google what the shortest quine in C is you would probably get this:</p>

    <pre>{`main(s){printf(s="main(s){printf(s=%c%s%1$c,34,s);}",34,s);}`}</pre>

    <p>which weighs in at 60 characters.</p>

    <p>But the shortest quine in C is actually</p>

    <pre>{`main(){system("cat " __FILE__);}`}</pre>

    <p>which is a mere 32 characters, nearly half the size of the first.</p>

    <p>Some might say this is cheating, and I'd agree, but cheaters win sometimes.</p>
  </div>
}
