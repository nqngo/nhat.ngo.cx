import "../styles/manifest.sass"

export default function App({ Component, pageProps }) {
  return (
    <div id="page" className="bg-indigo-900 w-full min-h-screen">
    <Component {...pageProps} />
    </div>
  )
}