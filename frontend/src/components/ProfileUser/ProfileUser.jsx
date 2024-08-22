import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileUser.css'; // Importation du fichier CSS pour les styles

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/user/profile');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img 
                    src={user.profilePhoto?.url} 
                    alt={`${user.username}'s profile`} 
                    className="profile-picture"
                />
                <h1>{user.username}</h1>
            </div>
            <div className="profile-details">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Nom:</strong> {user.fullName}</p>
                <p><strong>Rôle:</strong> {user.role}</p>
                {/* Ajoute d'autres informations utilisateur ici */}
            </div>
            <div className="profile-actions">
                <button onClick={() => alert("Modifier le profil")}>Modifier le profil</button>
                <button onClick={() => alert("Se déconnecter")}>Se déconnecter</button>
            </div>
        </div>
    );
};

export default Profile;