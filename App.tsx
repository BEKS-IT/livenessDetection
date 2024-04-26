import * as React from "react"
import { CameraCapturedPicture } from "expo-camera"
import Liveness from "./src/Liveness"

const App = () => {

  const onTestComplete = (image: CameraCapturedPicture) => {
      console.log(image)
  }

  return (
    <Liveness
      detectionsList={['SMILE']}
      onTestComplete={onTestComplete}
    />
  )
}

export default App
