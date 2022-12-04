class PostsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index,:show]
  
      def index
          post = Post.all
          post.order(created_at: :desc)
          render json: post
        end
  
        def create
          posts = Post.create!(post_params)
          render json: posts, status: :created
        end
  
        def update
          post = Post.find_by(id: params[:id])
          post.update!(edit_params)
          render json: post
        end

  
        private
  
        def post_params
          params.permit(:image, :caption, :user_id, :likes)
        end
  
        def edit_params
          params.permit(:likes)
        end
end
  