import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href={`https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,100;1,400
        &family=Roboto+Mono:ital,wght@1,200&display=swap`} rel="stylesheet"/>
        
        </Head>
        <body className='bg-gray-800 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument