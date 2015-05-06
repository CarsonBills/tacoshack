class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index

  end

  def new
    number = params["number"].to_i
    items = Item.all.map do |item|
      item.name
    end
    modifiers = Modifier.all.map do |word|
      word.modifier
    end
    adjectives = Adjective.all.map do |word|
      word.adjective
    end
    str = ""
    number.times do
      str << adjectives[(rand(0...adjectives.count))] + ", "
    end
        @data = {
        adjectives: str,
        item: items[(rand(0...items.count))],
        modifier: modifiers[(rand(0...modifiers.count))]
      }
      render json: @data
  end
end
