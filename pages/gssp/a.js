import Link from 'next/link'

export default function Page({ current, next }) {
  return (
    <div>
      <h1>{current}</h1>
      <Link href={next}><a>{next}</a></Link>
    </div>
  )
}

export const getServerSideProps = () => {
  return {
    props: { current: '/gssp/a', next: '/gssp/b' }
  }
}
