import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page(props) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <p>Loading...</p>
    )
  }

  if ([ 'a', 'b' ].includes(props.id)) {
    return (
      <div>
        <h1>{props.current}</h1>
        <Link href={props.next}><a>{props.next}</a></Link>
        {
          props.id === 'b' ? (
            <div>will redirect</div>
          ) : null
        }
      </div>
    )
  }

  return (
    <div>
      <h1>{props.current}</h1>
      <p>Now, click go back button of browser, or clcik the button below</p>
      <div><button onClick={() => history.back()}>go back</button></div>
      <p>should go back /gsp/<strong>b</strong></p>
    </div>
  )
}

export const getStaticProps = ({ params }) => {
  if (params.id === 'a') {
    return {
      props: { id: 'a', current: '/gsp/a', next: '/gsp/b' }
    }
  }

  if (params.id === 'b') {
    return {
      props: { id: 'b', current: '/gsp/b', next: '/gsp/c' }
    }
  }

  if (params.id === 'c') {
    return {
      unstable_redirect: {
        destination: '/gsp/d',
        permanent: false,
      }
    }
  }

  return {
    props: {
      id: 'd',
      current: '/gsp/d'
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'a' } },
      { params: { id: 'b' } },
      { params: { id: 'd' } },
    ],
    fallback: true,
  }
}
