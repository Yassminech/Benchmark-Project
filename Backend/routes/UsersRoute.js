const router =require("express").Router();
const { getAllUsers, getUserProfileCtrl, updateUserCtrl, UsersCountCtrl, ActivateUser,desactivateUser,getConnectedUserProfile} = require("../controllers/usersController");
const { VerifyTokenAdmin, verifyTokenOnlyUser, verifyTokenAuthorization } = require("../middlewares/verifyToken");
const  validateId = require("../middlewares/validateId");

// /api/users/profile-Obtenir tous les utilisateurs (admin seulement)
router.route("/profile").get(VerifyTokenAdmin ,getAllUsers);

// /api/users/profile/me - Obtenir le profil de l'utilisateur connecté
router.route("/profile/me").get(verifyTokenOnlyUser, getConnectedUserProfile);


// /api/users/profile/:id-Obtenir et mettre à jour un profil d'utilisateur par ID
router.route("/profile/:id")
    .get(validateId,getUserProfileCtrl)
    .put(validateId, verifyTokenOnlyUser, updateUserCtrl);
    

// /api/users/count-Obtenir le nombre total d'utilisateurs
router.route("/count").get(VerifyTokenAdmin, UsersCountCtrl)


// /api/users/activate/:id-Activer un utilisateur
router.route("/activate/:id").put(validateId,verifyTokenAuthorization, ActivateUser);

// /api/users/desactivate/:id-Désactiver un utilisateur
router.route("/desactivate/:id").put(validateId,verifyTokenAuthorization,desactivateUser);



module.exports = router;