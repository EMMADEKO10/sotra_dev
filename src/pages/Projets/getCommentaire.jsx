import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Avatar } from 'antd';

const CommentairesProjet = ({ reloadComment, setTotalCommentaires }) => {
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
  }, [id, reloadComment, setTotalCommentaires]);

  return (
    <div className="space-y-6">
      {commentaires.map(commentaire => (
        <div key={commentaire._id} className="bg-gray-50 rounded-lg p-4 shadow">
          <div className="flex items-start space-x-4">
            <Avatar size={40} src={commentaire.avatar || "default-avatar.png"}>
              {commentaire.name.charAt(0).toUpperCase()}
            </Avatar>
            <div className="flex-1 min-w-0">
              <h5 className="text-lg font-semibold truncate">{commentaire.name}</h5>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(commentaire.createdAt).toLocaleString()}
              </p>
              <p className="text-gray-700 break-words">{commentaire.texte}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentairesProjet;