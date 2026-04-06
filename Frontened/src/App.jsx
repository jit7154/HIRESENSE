import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./Features/auth/auth.context.jsx"
import { InterviewProvider } from "./Features/interview/interview.context.jsx"

function App() {


  //pure application ke andr ath provider ke andr wrap kr diya  pure app ke and load user set loadin kaa access chala aeagaa
  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router}/>
        </InterviewProvider>

    </AuthProvider>
  )
}

export default App
