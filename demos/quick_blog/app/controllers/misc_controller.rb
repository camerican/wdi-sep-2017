class MiscController < ApplicationController

  def categories
    @categories = Category.all
  end

  def category_data
    @category = Category.find(params[:id])
    p @category
    # respond_to do |format|
    #   format.json 
    # end
    respond_to :json
  end
end
