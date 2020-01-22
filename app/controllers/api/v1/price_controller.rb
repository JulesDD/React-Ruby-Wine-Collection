class Api::V1::PriceController < ApplicationController
  def index
    price = Price.all.order(create_at: :desc) # This will grab all the prices in the database.
    render json: price # Send the list of prices as a JSON response with render.
  end

  def create
    price = Price.create!(price_params)
    if price
      render json: price
    else
      render json: price.errors
    end
  end

  def show
    if price
      render json: price
    else
      render json: price.errors
    end
  end

  # Using Ruby’s safe navigation operator &., which avoids nil errors when calling a method.
  # This let’s you delete a recipe only if it exists, then send a message as a response.
  def destroy
    price&.destroy
    render json: { message: 'Price deleted' }
  end

  private
  # Method where you whitelisted your controller parameters to prevent wrong or malicious content from getting into your database.
  # In this case, you are permitting a name, image, ingredients, and instruction parameter for valid use of the create method.
  def price_params
    params.permit(:name, :image, :price)
  end

  # This method uses ActiveRecord's find method to find a recipe whose if matches the id provided in params.
  # This then assigns it to an instance variable called @price
  def price
    @price ||= Price.find(params[:id])
  end
end
