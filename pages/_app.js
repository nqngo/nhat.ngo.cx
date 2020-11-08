// import React from 'react'
// import Head from 'next/head'
// import { ThemeProvider } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import theme from '../styles/theme.js'

// export default function App({ Component, pageProps }) {
//   React.useEffect(() => {
//     const jssStyles = document.querySelector('#jss-server-side')
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles)
//     }
//   }, [])

//   return (
//     <React.Fragment>
//       <Head>
//         <title>Nhat Ngo</title>
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//       </Head>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </React.Fragment>
//   )
// }
import "../styles/tailwind.sass"

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}