Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get('/posts/:id', {to: "posts#show", as: :product})
  #resources :posts, only: [:new, :create, :show, :destroy, :edit, :update, :index]

  #resources :comments, only: [ :new, :create, :destroy, ]




  resources :posts do
    resources :comments, only: [ :new, :create, :destroy, ]
  end
end
