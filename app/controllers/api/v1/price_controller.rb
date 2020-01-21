class Api::V1::PriceController < ApplicationController
  def index
    price = Price.all.order(create_at: :desc) #this will grab all the prices in the database.
    render json: price #send the list of prices as a JSON response with render.
  end

  def create
  end

  def show
  end

  def destroy
  end
end
