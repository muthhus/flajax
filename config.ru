rrequire 'rubygems'
require 'bundler'
Bundler.require

require ::File.expand_path("../spec/dummy/config/environment",__FILE__)
run Dummy::Application
