class Api::MatchesController < ApplicationController

  def index
    @matches = Match.order(score: :desc)

    render json: @matches
  end

  def create
    #  Time.new (from JSON from front_end)
    @match = Match.new(match_params)

    #if saved successfully
    if @match.save
      render json: {status: :created, match: @match } 
    else
      render json: {error: @match.errors.messages}, status: 422
    end

  end

  private
  
  def match_params
    params.require(:match).permit(:score, :day_played, :user_id)
  end
end
