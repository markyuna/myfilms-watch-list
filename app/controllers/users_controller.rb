class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: %i[show]

  def show
    @lists = current_user.lists.all
    @list = current_user.reviews.all
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
