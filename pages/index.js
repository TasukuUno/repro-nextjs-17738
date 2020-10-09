import Link from 'next/link'

export default function Index() {
  return (
    <div id="index">
      <ul>
        <li><Link href='/gssp/a'><a>getServerSideProps flow</a></Link></li>
        <li><Link href='/gsp/a'><a>getStaticProps flow</a></Link></li>
      </ul>
    </div>
  )
}
