import Link from 'next/link'

export default function Page({ current }) {
  return (
    <div>
      <h1>{current}</h1>
      <p>Now, click go back button of browser, or clcik the button below</p>
      <div><button onClick={() => history.back()}>go back</button></div>
      <p>should go back /gssp/<strong>b</strong></p>
    </div>
  )
}

export const getServerSideProps = () => {
  return {
    props: { current: '/gssp/d' }
  }
}
