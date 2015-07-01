class UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:create]

  def create
    User.create({username: params[:username]})
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end
end