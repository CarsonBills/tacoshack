class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index

  end

  def new
    items = Item.all.map do |item|
      item.name
    end
    modifiers = Modifier.all.map do |modifier|
      modifier.modifier
    end
    adjectives = Adjective.all.map do |adjective|
      adjective.adjective
    end
      {adjectives: adjectives[(rand(0-adjectives.count))],
      item: items[(rand(0-items.count))],
      modifier: modifiers[(rand(0-modifiers.count))]}.to_json
  end
end
