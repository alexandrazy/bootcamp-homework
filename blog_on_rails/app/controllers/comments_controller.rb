class CommentsController < ApplicationController
  before_action :find_comment , only: [ :destroy ]

def create 
  @post = Post.find params[:post_id]
  @comment = Comment.new comment_params 
  @comment.post = @post
  if @comment.save
    puts "The comment saved"
    redirect_to post_path(@post),
    notice: 'comment successfully created!'
  else

    puts @comment.errors.full_messages.join(", ")
    @comments = @post.comments.all
        render "posts/show",
    notice: @comment.errors.full_messages.join(", ")
  end 
end 

def destroy 
  @post = Post.find params[:post_id]
  @comment = Comment.find params[:id]
  @comment.destroy 
  redirect_to post_path(@post)

end

private

def comment_params
  params.require(:comment).permit(:body)
end 


def find_comment
  @comment = Comment.find params[:id]
end 

end
