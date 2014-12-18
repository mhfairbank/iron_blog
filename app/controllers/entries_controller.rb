class EntriesController < ApplicationController
  def index
    render json: Entry.all
  end

  def create
    safe_entry = params.require(:entry).permit(:body, :title, :level_of_rage)
    entry = Entry.create(safe_entry)
    render json: entry
  end

  def update
    safe_entry = params.require(:entry).permit(:body, :title, :level_of_rage)
    entry = Entry.find(params[:id])
    entry.update(safe_entry)
    render json: entry
  end

  def destroy
    entry = Entry.find(params[:id])
    entry.destroy
    render json: {}
  end
  
end
