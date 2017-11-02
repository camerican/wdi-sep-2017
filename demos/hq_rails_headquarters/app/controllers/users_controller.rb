class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @users = User.all
    p @users
  end
  # create a new user
  def create
    user = User.new( first: params[:first],
      last: params[:last],
      username: params[:username],
      password: params[:password])
    if user.save
      flash[:notice] = "Good job!"
      redirect_to :root
    else
      flash[:alert] = "Oops, no bueno"
      redirect_to :back
    end
  end
end
