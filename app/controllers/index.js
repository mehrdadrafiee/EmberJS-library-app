import Ember from 'ember';

let { Controller } = Ember;

export default Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid')

});
