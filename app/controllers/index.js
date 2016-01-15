import Ember from 'ember';
import config from 'buildpack-example/config/environment';

export default Ember.Controller.extend({
  greeting: config.greeting
});
