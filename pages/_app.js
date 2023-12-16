import '@/styles/globals.css'
import { io } from 'socket.io-client'
export default function App({ Component, pageProps }) {

  return (<SocketProvider>
    <Component {...pageProps} />
  </SocketProvider>);
}
