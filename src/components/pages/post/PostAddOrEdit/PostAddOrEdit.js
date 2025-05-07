import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getAllCategories, getPostById} from "../../../../redux/store";
import {Button, Container, Form} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {
  addOrEditPost, authorInitState, categoryInitState, contentInitState,
  getAddOrEditLabel, publishedDateInitState, shortDescriptionInitState, titleInitState
} from "./AddOrEditDifferenciator";
import {postObjectWithEmptyFields} from "./AddOrEditHelper";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostAddOrEdit = ({actionType}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  let post = useSelector(state => getPostById(state, id));
  if (!id) post = postObjectWithEmptyFields;

  const categories = useSelector(state => getAllCategories(state));

  const [title, setTitle] = useState(titleInitState(actionType, post.title));
  const [shortDescription, setShortDescription] = useState(shortDescriptionInitState(actionType, post.shortDescription));
  const [content, setContent] = useState(contentInitState(actionType, post.content));
  const [publishedDate, setPublishedDate] = useState(publishedDateInitState(actionType, post.publishedDate));
  const [author, setAuthor] = useState(authorInitState(actionType, post.author));
  const [category, setCategory] = useState(categoryInitState(actionType, post.category));

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addOrEditPost(actionType, id, title, shortDescription,
      content, publishedDate, category, author));
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
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value="">Select category...</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Form.Select>
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
          <div className="bg-white rounded border">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Leave a comment here"
              modules={{
                toolbar: [
                  ['bold', 'italic', 'underline'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  ['link'],
                  ['clean']
                ]
              }}
              formats={[
                'bold', 'italic', 'underline',
                'list', 'bullet',
                'link'
              ]}
            />
          </div>
          <Form.Control
            type="hidden"
            value={content}
            onChange={() => {}}
            isInvalid={!content || content === '<p><br></p>'}
            required
          />
          <Form.Control.Feedback type="invalid">
            Content is required
          </Form.Control.Feedback>
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