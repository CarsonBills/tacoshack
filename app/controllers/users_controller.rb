class UsersController < ApplicationController
  def create
    User.create({username: params[:name]})
  end
end