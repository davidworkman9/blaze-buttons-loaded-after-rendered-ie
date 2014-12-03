if (Meteor.isClient) {
    Template.ieTest.created = function () {
        var self = this;
        self.sub = new Blaze.ReactiveVar(false);

        setTimeout(function () {
            self.sub.set(true);
        }, 3000);
    };

    Template.ieTest.helpers({
        'loading': function () {
            return !Template.instance().sub.get();
        }
    });
}

Router.map(function () {
    this.route('ieTest', { path: '/ieTest' });
    this.route('homepage', { path: '/' });
});
