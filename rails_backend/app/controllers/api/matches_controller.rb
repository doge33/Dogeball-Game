class Api::MatchesController < ApplicationController

  def index
    @matches = Match.order(score: :desc)

    render json: @matches
  end
end
