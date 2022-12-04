class UsersController < ApplicationController
        skip_before_action :authorize, only: [:create]
    
        def create
          user = User.create!(user_params)
          session[:user_id] = user.id
          render json: user, status: :created
        end
      
        def show
          render json: @current_user
        end
    
        def update
          if @current_user
          @current_user.update!(update_params)
          render json: @current_user, status: :accepted
          end
        end

        def destroy
          user = User.find(params[:id])
          user.destroy
          render json: user, status: :no_content
        end
      
        private
      
        def user_params
          params.permit(:username, :email, :password, :password_confirmation, :profile_pic, :followers)
        end
    
        def update_params
          params.permit(:username, :email, :profile_pic)
        end
end
