import {useSelector} from "react-redux";
import {getAllPosts} from "../../../redux/store";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const Home = () => {

  const posts = useSelector(state => getAllPosts(state));

  return (
    <section className="py-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>All posts</h2>
          <Button as={Link} to="/post/add" variant="outline-primary">
            Add post
          </Button>
        </div>
        <Row className="g-4">
          {posts.map(post => (
            <Col key={post.id} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="mb-1">
                    <strong>Author:</strong> {post.author}
                  </Card.Text>
                  <Card.Text className="mb-1">
                    <strong>Published:</strong> {post.publishedDate}
                  </Card.Text>
                  <Card.Text>{post.shortDescription}</Card.Text>
                  <Button as={Link} to={`/post/${post.id}`}>
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Home;