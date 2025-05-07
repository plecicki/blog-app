import {Route, Routes} from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/Home/Home";
import PostAddOrEdit from "./components/pages/post/PostAddOrEdit/PostAddOrEdit";
import PostGet from "./components/pages/post/PostGet/PostGet";
import About from "./components/pages/About/About";
import {Container} from "react-bootstrap";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import Categories from "./components/pages/Categories/Categories";
import PostCards from "./components/pages/post/PostCards/PostCards";

const App = () => {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:id" element={<PostGet/>}/>
        <Route path="/post/add" element={<PostAddOrEdit actionType='ADD'/>}/>
        <Route path="/post/edit/:id" element={<PostAddOrEdit actionType='EDIT'/>}/>
        <Route path="/categories" element={<Categories />}/>
        <Route path="/categories/:category" element={<PostCards />}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </Container>
  );
};
export default App;
