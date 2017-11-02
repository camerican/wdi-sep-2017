class UsersController < ApplicationController
  before_action :get_user, only: [:show, :destroy]
  def index
    @users = User.all
  end
  def show
    # get_user
  end
  def create
    @user = User.new( user_params )
    if @user.save
      flash[:notice] = "Well done & welcome"
    else
      flash[:alert] = "Oh no, we don't want you here"
    end
    redirect_to :users
  end
  def destroy
    # get_user
    if @user.destroy
      flash[:notice] = "Good bye forever!"
    else
      flash[:alert] = "Sorry, you can't leave"
    end
    redirect_to :users
  end

  private
    def get_user
      @user = User.find(params[:id])
    end
    def user_params
      params.require(:user).permit(:first_name, :last_name, :username, :password)
    end
end
