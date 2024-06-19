import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentairesProjet = ({ reloadComment,setTotalCommentaires }) => {
  const { id } = useParams();
  const [commentaires, setCommentaires] = useState([]);

  useEffect(() => {
    const fetchCommentaires = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/commentaires/${id}`);
        setCommentaires(response.data);
        setTotalCommentaires(response.data.length);
      } catch (error) {
        console.error('Erreur lors de la récupération des commentaires:', error);
      }
    };

    fetchCommentaires();
  }, [id, reloadComment,setTotalCommentaires]);

  return (
    <div>
      {commentaires.map(commentaire => (
        <div key={commentaire._id} className="mb-6">
          <div className="flex items-center">
            <div className="ml-4">
              <h5 className="text-lg font-semibold">{commentaire.name}</h5>
              <p>{new Date(commentaire.createdAt).toLocaleString()}</p>
              <p>{commentaire.texte}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentairesProjet;
