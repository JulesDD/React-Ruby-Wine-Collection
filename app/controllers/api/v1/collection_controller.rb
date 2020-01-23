class Api::V1::PriceController < ApplicationController
  def index
    collection = Collection.all.order(create_at: :desc) # This will grab all the prices in the database.
    render json: collection # Send the list of prices as a JSON response with render.
  end

  def create
    collection = Collection.create!(price_params)
    if collection
      render json: collection
    else
      render json: collection.errors
    end
  end

  def show
    if collection
      render json: collection
    else
      render json: collection.errors
    end
  end

  # Using Ruby’s safe navigation operator &., which avoids nil errors when calling a method.
  # This let’s you delete a recipe only if it exists, then send a message as a response.
  def destroy
    collection&.destroy
    render json: { message: 'Collection deleted' }
  end

  private
  # Method where you whitelisted your controller parameters to prevent wrong or malicious content from getting into your database.
  # In this case, you are permitting a name, image, ingredients, and instruction parameter for valid use of the create method.
  def collection_params
    params.permit(:name, :image, :price, :description)
  end

  # This method uses ActiveRecord's find method to find a recipe whose if matches the id provided in params.
  # This then assigns it to an instance variable called @price
  def collection
    @collection ||= Collection.find(params[:id])
  end
end
