import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addPost, getPostById} from "../../../../redux/store";
import {Button, Container, Form} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {
  addOrEditPost,
  authorInitState,
  contentInitState, getAddOrEditLabel,
  publishedDateInitState,
  shortDescriptionInitState,
  titleInitState
} from "./AddOrEditDifferenciator";
import {postObjectWithEmptyFields} from "./AddOrEditHelper";

const PostAddOrEdit = ({actionType}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  let post = useSelector(state => getPostById(state, id));
  if (!id) post = postObjectWithEmptyFields;

  const [title, setTitle] = useState(titleInitState(actionType, post.title));
  const [shortDescription, setShortDescription] = useState(shortDescriptionInitState(actionType, post.shortDescription));
  const [content, setContent] = useState(contentInitState(actionType, post.content));
  const [publishedDate, setPublishedDate] = useState(publishedDateInitState(actionType, post.publishedDate));
  const [author, setAuthor] = useState(authorInitState(actionType, post.author));

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addOrEditPost(actionType, id, title, shortDescription,
      content, publishedDate, author));
    navigate('/');
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">
        {getAddOrEditLabel(actionType)} post
      </h2>
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
            {getAddOrEditLabel(actionType)} post
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PostAddOrEdit;