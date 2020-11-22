import "../styles/manifest.scss"

export default function App({ Component, pageProps }) {
  return (
    <div id="page" className="bg-indigo-900 w-full h-screen">
      <Component {...pageProps} />
    </div>
  )
}