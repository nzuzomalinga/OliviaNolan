import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import { cjsInterop } from "vite-plugin-cjs-interop";

const config: UserConfig = {
  plugins: [react(), vike({
    prerender:true
  }),
    cjsInterop({
      // List of CJS dependencies that require interop
      dependencies: [
        "react-image-gallery",
      ],
    })],
}

export default config
