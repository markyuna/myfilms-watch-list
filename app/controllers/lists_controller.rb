class ListsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:list]
  before_action :set_list, only: [:show, :destroy]

  def index
    @lists = current_user.lists.all
  end

  def show
    @bookmark = Bookmark.new
    @review = Review.new(list: @list)
  end

  def new
    @list = current_user.lists.new
  end

  def create
    @list = current_user.lists.new(list_params)
    if @list.save
      redirect_to list_path(@list)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @list.destroy
    redirect_to lists_path, status: :see_other
  end

  private

  def set_list
    @list = current_user.lists.find(params[:id])
  end

  def list_params
    params.require(:list).permit(:name, :photo)
  end
end
