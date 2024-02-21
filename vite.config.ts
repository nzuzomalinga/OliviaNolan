import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [react(), vike()],
  ssr: {
    // Add npm packages containing invalid code here
    noExternal: ['react-image-gallery']
  }
}

export default config
