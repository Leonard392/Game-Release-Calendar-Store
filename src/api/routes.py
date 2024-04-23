"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, FavoriteStore, FavoriteGame, FavoriteCreator, FavoritePlatform
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)



@api.route('/signup', methods=['POST'])
def sign_up():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({"message": "Username and password are required"}), 400
    
    if User.query.filter_by(username=username).first():
        return jsonify({"message": "Username already exists"}), 409
    
    hashed_password = generate_password_hash(password)
    new_user = User(username=username, password=hashed_password, is_active=True)
    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=new_user.id)
    
    return jsonify({
    "message": "User created successfully",
    "access_token": access_token
    }), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({"message": "Username and password are required"}), 400
    
    user = User.query.filter_by(username=username).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"message": "Invalid username or password"}), 401
    
    access_token = create_access_token(identity=user.id)
    
    return jsonify({"access_token": access_token}), 200

@api.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    # No need to do anything for logout with JWT
    return jsonify({"message": "Logout successful"}), 200


# ROUTES FOR FAVORITE GAMES

@api.route('/favorites/games', methods=['POST'])
@jwt_required()
def add_game_to_favorites():
    try:
        user_id = get_jwt_identity()
        data = request.json
        game_id = data.get('game_id')
        
        if not game_id:
            return jsonify({"message": "Game ID is required"}), 400
        
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404
        
        # Verificar si el juego ya está en la lista de favoritos del usuario
        if FavoriteGame.query.filter_by(user_id=user_id, game_id=game_id).first():
            return jsonify({"message": "Game already in favorites"}), 400
        
        # Agregar el juego a la lista de favoritos del usuario
        new_favorite = FavoriteGame(user_id=user_id, game_id=game_id)
        db.session.add(new_favorite)
        db.session.commit()
        
        return jsonify({"message": "Game added to favorites successfully"}), 201
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@api.route('/favorites/games/<int:game_id>', methods=['DELETE'])
@jwt_required()
def remove_game_from_favorites(game_id):
    user_id = get_jwt_identity()
    
    user = User.query.get(user_id)
    
    # Verificar si el juego está en la lista de favoritos del usuario
    favorite_game = FavoriteGame.query.filter_by(user_id=user_id, game_id=game_id).first()
    if not favorite_game:
        return jsonify({"message": "Game not found in favorites"}), 404
    
    # Eliminar el juego de la lista de favoritos del usuario
    db.session.delete(favorite_game)
    db.session.commit()
    
    return jsonify({"message": "Game removed from favorites successfully"}), 200

@api.route('/favorites/games', methods=['GET'])
@jwt_required()
def get_user_game_favorites():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    
    user_game_favorites = [game.game_id for game in user.favorite_games]
    
    return jsonify(user_game_favorites), 200

#ROUTES FOR FAVORITE CREATORS

@api.route('/favorites/creators', methods=['POST'])
@jwt_required()
def add_creator_to_favorites():
    try:
        user_id = get_jwt_identity()
        data = request.json
        creator_id = data.get('creator_id')
        
        if not creator_id:
            return jsonify({"message": "Creator ID is required"}), 400
        
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404
        
        # Verificar si el juego ya está en la lista de favoritos del usuario
        if FavoriteCreator.query.filter_by(user_id=user_id, creator_id=creator_id).first():
            return jsonify({"message": "Creator already in favorites"}), 400
        
        # Agregar el juego a la lista de favoritos del usuario
        new_favorite = FavoriteCreator(user_id=user_id, creator_id=creator_id)
        db.session.add(new_favorite)
        db.session.commit()
        
        return jsonify({"message": "Creator added to favorites successfully"}), 201
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@api.route('/favorites/creators/<int:creator_id>', methods=['DELETE'])
@jwt_required()
def remove_creator_from_favorites(creator_id):
    user_id = get_jwt_identity()
    
    user = User.query.get(user_id)
    
    # Verificar si el juego está en la lista de favoritos del usuario
    favorite_creator = FavoriteCreator.query.filter_by(user_id=user_id, creator_id=creator_id).first()
    if not favorite_creator:
        return jsonify({"message": "Creator not found in favorites"}), 404
    
    # Eliminar el juego de la lista de favoritos del usuario
    db.session.delete(favorite_creator)
    db.session.commit()
    
    return jsonify({"message": "Creator removed from favorites successfully"}), 200

@api.route('/favorites/creators', methods=['GET'])
@jwt_required()
def get_user_creator_favorites():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    
    user_creator_favorites = [creator.creator_id for creator in user.favorite_creators]
    
    return jsonify(user_creator_favorites), 200

#ROUTES FOR FAVORITE STORE

@api.route('/favorites/stores', methods=['POST'])
@jwt_required()
def add_store_to_favorites():
    try:
        user_id = get_jwt_identity()
        data = request.json
        store_id = data.get('store_id')
        
        if not store_id:
            return jsonify({"message": "Store ID is required"}), 400
        
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404
        
        # Verificar si el juego ya está en la lista de favoritos del usuario
        if FavoriteStore.query.filter_by(user_id=user_id, store_id=store_id).first():
            return jsonify({"message": "Store already in favorites"}), 400
        
        # Agregar el juego a la lista de favoritos del usuario
        new_favorite = FavoriteStore(user_id=user_id, store_id=store_id)
        db.session.add(new_favorite)
        db.session.commit()
        
        return jsonify({"message": "Store added to favorites successfully"}), 201
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@api.route('/favorites/stores/<int:creator_id>', methods=['DELETE'])
@jwt_required()
def remove_store_from_favorites(store_id):
    user_id = get_jwt_identity()
    
    user = User.query.get(user_id)
    
    # Verificar si el juego está en la lista de favoritos del usuario
    favorite_store = FavoriteStore.query.filter_by(user_id=user_id, store_id=store_id).first()
    if not favorite_store:
        return jsonify({"message": "Store not found in favorites"}), 404
    
    # Eliminar el juego de la lista de favoritos del usuario
    db.session.delete(favorite_store)
    db.session.commit()
    
    return jsonify({"message": "Creator removed from favorites successfully"}), 200

@api.route('/favorites/stores', methods=['GET'])
@jwt_required()
def get_user_store_favorites():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    
    user_store_favorites = [store.store_id for store in user.favorite_stores]
    
    return jsonify(user_store_favorites), 200



# ROUTES FOR FAVORITE PLATFORMS

@api.route('/favorites/platforms', methods=['POST'])
@jwt_required()
def add_platform_to_favorites():
    try:
        user_id = get_jwt_identity()
        data = request.json
        platform_id = data.get('platform_id')
        
        if not platform_id:
            return jsonify({"message": "Platform ID is required"}), 400
        
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404
        
        # Verificar si el juego ya está en la lista de favoritos del usuario
        if FavoritePlatform.query.filter_by(user_id=user_id, platform_id=platform_id).first():
            return jsonify({"message": "Platform already in favorites"}), 400
        
        # Agregar el juego a la lista de favoritos del usuario
        new_favorite = FavoritePlatform(user_id=user_id, platform_id=platform_id)
        db.session.add(new_favorite)
        db.session.commit()
        
        return jsonify({"message": "Platform added to favorites successfully"}), 201
    except Exception as e:
        return jsonify({"message": str(e)}), 500

@api.route('/favorites/platforms/<int:game_id>', methods=['DELETE'])
@jwt_required()
def remove_platform_from_favorites(platform_id):
    user_id = get_jwt_identity()
    
    user = User.query.get(user_id)
    
    # Verificar si el juego está en la lista de favoritos del usuario
    favorite_platform = FavoritePlatform.query.filter_by(user_id=user_id, platform_id=platform_id).first()
    if not favorite_platform:
        return jsonify({"message": "Platform not found in favorites"}), 404
    
    # Eliminar el juego de la lista de favoritos del usuario
    db.session.delete(favorite_platform)
    db.session.commit()
    
    return jsonify({"message": "Platform removed from favorites successfully"}), 200

@api.route('/favorites/platforms', methods=['GET'])
@jwt_required()
def get_user_platform_favorites():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    
    user_platform_favorites = [platform.platform_id for platform in user.favorite_platforms]
    
    return jsonify(user_platform_favorites), 200