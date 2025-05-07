import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getAllPosts, getPostsByCategory} from "../../../../redux/store";

const PostCards = () => {

  const {category} = useParams();

  const posts = useSelector(state => category ?
    getPostsByCategory(state, category) : getAllPosts(state));

  if (posts.length === 0)
    return (<h4>No posts...</h4>)
  else
    return (
      <Row className="g-4">
        {
          posts.map(post => (
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
                  <Card.Text className="mb-1">
                    <strong>Category:</strong> {post.category}
                  </Card.Text>
                  <Card.Text>{post.shortDescription}</Card.Text>
                  <Button as={Link} to={`/post/${post.id}`}>
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    )
}

export default PostCards;