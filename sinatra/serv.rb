require 'bundler'
Bundler.require

before do
  headers 'Access-Control-Allow-Origin' => '*',
          'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST', 'PUT'],
          'Access-Control-Max-Age' => '1728000',
          'Access-Control-Allow-Credentials' => '1728000'
end

post "/login" do
  content_type :json
  post_data = {
    grant_type: 'password',
    username: params[:username],
    password: params[:password]
  }
  res = HTTParty.post('https://ruby-china.org/oauth/token', body: post_data)
  MultiJson.dump(res.merge(code: res.code))
end
