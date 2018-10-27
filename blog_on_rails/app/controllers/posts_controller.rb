class PostsController < ApplicationController

  def new
    @post = Post.new
  end

  def create 
    @post = Post.new post_params 
    if @post.save
    redirect_to post_path(@post.id)
    else
    render :new
    end 
  end

  def show
    @post = Post.find params[:id]
    @comment = Comment.new 
    @comments = @post.comments.all
  end

  def index
    @posts = Post.all
  end

  def destroy
    post = Post.find params[:id]
    post.destroy
    redirect_to posts_path
    end

    def edit
        @post = Post.find params[:id]
    end

    def update
      @post = Post.find params[:id]
      @post.update post_params
      redirect_to post_path(@post)
      end
    
  private
	  def post_params
	  params.require(:post ).permit(:title, :body)
  end 


  def find_post
    @post = Post.find params[:id]
  end
end
