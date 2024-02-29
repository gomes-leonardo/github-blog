import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Post from "./pages/Post"
import DefaultLayout from "./DefaultLayout"

const Router = () => {
  return (
    <Routes>
        <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}

export default Router