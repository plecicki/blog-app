import {Route, Routes} from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/Home/Home";
import PostAdd from "./components/pages/post/PostAdd/PostAdd";
import PostGet from "./components/pages/post/PostGet/PostGet";
import PostEdit from "./components/pages/post/PostEdit/PostEdit";
import About from "./components/pages/About/About";

const App = () => {
  return (
    <main>
      {/*<NavBar />*/}
      {/*<Container>*/}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostGet />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/*</Container>*/}
    </main>
  );
};
export default App;
