import "../styles/manifest.scss"

export default function App({ Component, pageProps }) {
  return (
    <div id="page" className="bg-gradient-to-r from-indigo-900 to-pink-900 w-full min-h-screen">
      <Component {...pageProps} />
    </div>
  )
}