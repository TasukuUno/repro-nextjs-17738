import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>This page is never rendered</h1>
    </div>
  )
}

export const getServerSideProps = () => {
  return {
    unstable_redirect: {
      destination: '/gssp/d',
      permanent: false,
    }
  }
}
