import Footer from "./component/Footer";
import Form from "./component/Form";
import Header from "./component/Header";
import ShowComment from "./component/ShowComment";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import api from "./API/Comment";

import "./component/feedback.css";

function App() {
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const addcommenthandler = async (comment) => {
    const request = { id: uuidv4(), ...comment };
    try {
      const response = await api.post("/Comments", request);
      setComments((currentComments) => [...currentComments, response.data]);
      setError("");
    } catch (requestError) {
      setError("Could not save your feedback. Start JSON Server and try again.");
      throw requestError;
    }
  };
  const deletecomment = async (id) => {
    try {
      await api.delete(`/Comments/${id}`);
      setComments((currentComments) =>
        currentComments.filter((comment) => comment.id !== id)
      );
    } catch (requestError) {
      setError("Could not delete this comment. Please try again.");
    }
  };

  const retrieveComments = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/Comments");
      setComments(response.data || []);
      setError("");
    } catch (requestError) {
      setError("Comments are unavailable. Start JSON Server on port 3001.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    retrieveComments();
  }, []);

  const filteredComments = comments.filter((comment) => {
    const searchableText = `${comment.fname} ${comment.lname} ${comment.comment}`;
    return searchableText.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleCommentAdded = async (comment) => {
    await addcommenthandler(comment);
  };

  return (
    <div className="body">
      <Header />

      <main className="content">
        <section className="intro">
          <p className="eyebrow">YOUR VOICE MATTERS</p>
          <h1>Make the next experience better.</h1>
          <p>Share a thought, celebrate a win, or point us toward an improvement.</p>
        </section>

        <div className="dashboard">
          <div className="left">
            <Form addcommenthandler={handleCommentAdded} />
          </div>

          <section className="right" aria-labelledby="comments-heading">
            <div className="comments-header">
              <div>
                <p className="eyebrow">COMMUNITY NOTES</p>
                <h2 id="comments-heading">Recent feedback</h2>
              </div>
              <span className="count-badge" aria-label={`${comments.length} total comments`}>
                {comments.length}
              </span>
            </div>

            <div className="comment-tools">
              <label className="search-label" htmlFor="comment-search">Search feedback</label>
              <input
                id="comment-search"
                type="search"
                placeholder="Search names or comments"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <button className="refresh-button" type="button" onClick={retrieveComments}>
                Refresh
              </button>
            </div>

            {error && <p className="status-message error-message" role="alert">{error}</p>}
            {isLoading ? (
              <p className="status-message">Loading feedback...</p>
            ) : (
              <ShowComment comments={filteredComments} deletecomment={deletecomment} />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
