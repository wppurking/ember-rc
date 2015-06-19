require "sinatra"

before do
   headers 'Access-Control-Allow-Origin' => '*', 
           'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST', 'PUT'],
           'Access-Control-Max-Age' => '1728000',
           'Access-Control-Allow-Credentials' => '1728000'
end

get "/" do
  erb :index
end
