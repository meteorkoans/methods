Items = new Meteor.Collection("items");

if (Meteor.isClient) {

  Template.list.helpers({
    items: function() {
      return Items.find()
    }
  });

  Template.form.events({
    'keypress input': function(e, t) {
      if (e.keyCode === 13) {
        // locate input field
        var el = t.find("#item");

        // server-side method invocation
        Meteor.call("createItem", el.value);

        // clean up input field
        el.value = "";
      }
    }
  });

}

if (Meteor.isServer) {
}

Meteor.methods({
  createItem: function(text) {
    Items.insert({text: text});
  }
});
