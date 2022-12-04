class CommentsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
  
    def index
        comment = Comment.all
        comment.order(created_at: :desc)
        render json: comment
      end

      def create
        comments = Comment.create!(post_params)
        render json: comments, status: :created
      end

      private

      def post_params
        params.permit(:content, :post_id, :user_id)
      end
end
