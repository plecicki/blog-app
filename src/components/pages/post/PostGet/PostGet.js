import { useDispatch, useSelector } from "react-redux";
import { deletePostById, getPostById } from "../../../../redux/store";
import {Link, Navigate, useParams} from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import PostDelete from "../PostDelete/PostDelete";

const PostGet = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector(state => getPostById(state, id));
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(deletePostById(post.id));
    setShowModal(false);
  };

  const handleCancel = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  if (!post) return <Navigate to='/' />;
  else return (
    <section className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h2 className="mb-0">{post.title}</h2>
            <div>
              <Button variant="outline-info" size="sm" className="me-2" as={Link} to={`/post/edit/${post.id}`}>Edit</Button>
              <Button variant="outline-danger" size="sm" onClick={handleShow}>Delete</Button>
            </div>
          </div>
          <p><strong>Author:</strong> {post.author}</p>
          <p><strong>Published:</strong> {post.publishedDate}</p>
          <p>{post.content}</p>
        </div>
      </div>

      <PostDelete
        show={showModal}
        onCancel={handleCancel}
        onConfirm={handleDelete}
      />
    </section>
  );
};

export default PostGet;