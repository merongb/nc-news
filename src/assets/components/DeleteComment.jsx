import { useState } from "react";
import { deleteComment } from "../../utils";

export function DeleteComment({ comment_id, onDelete }) {
    const [isDeleting, setIsDeleting] = useState(false)
    const [error, setError] = useState(null)
  
    const handleDelete = () => {
      setIsDeleting(true)
      deleteComment(comment_id)
        .then(() => {
          onDelete(comment_id)
        })
        .catch(() => {
          setError("An error occured whilst trying to delete")
        })
        .finally(() => {
          setIsDeleting(false)
        })
    }
  


    return (
        <div>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete Comment"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    )
  }