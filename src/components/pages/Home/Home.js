import {Link} from "react-router-dom";
import {Button, Container, Row} from "react-bootstrap";
import PostCards from "../post/PostCards/PostCards";

const Home = () => {

  return (
    <section className="py-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>All posts</h2>
          <Button as={Link} to="/post/add" variant="outline-primary">
            Add post
          </Button>
        </div>
        <PostCards/>
      </Container>
    </section>
  )
}

export default Home;