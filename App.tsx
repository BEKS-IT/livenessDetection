import * as React from "react"
import { CameraCapturedPicture } from "expo-camera"
import Liveness from "./src/Liveness"

const App = () => {

  const onTestComplete = (image: CameraCapturedPicture) => {
      console.log(image)
  }

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{ title: "Demo" }}
    //     />
    //     <Stack.Screen name="Detection" component={Liveness} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Liveness
      detectionsList={['SMILE']}
      onTestComplete={onTestComplete}
    />
  )
}

export default App
