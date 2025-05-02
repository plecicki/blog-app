import {useDispatch} from "react-redux";
import {useState} from "react";
import {addPost} from "../../../../redux/store";
import {Button, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const PostAdd = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({title, shortDescription, content, publishedDate, author}));
    navigate('/');
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Add post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <Form.Control
            type="date"
            value={publishedDate}
            onChange={e => setPublishedDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Short description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Leave a comment here"
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Main content</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Leave a comment here"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-start">
          <Button variant="primary" type="submit">
            Add post
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PostAdd;