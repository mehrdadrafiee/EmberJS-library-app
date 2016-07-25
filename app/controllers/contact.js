import Ember from 'ember';

export default Ember.Controller.extend({

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

  actions: {
    sendMessage() {
      alert(`Thanks for contacting us! ${this.get('emailAddress')}`);
      this.set('responseMessage', `We just received your note! We will contact you at: ${this.get('emailAddress')}`);
      this.setProperties({'emailAddress': '', 'message': ''});
    }
  }

});
