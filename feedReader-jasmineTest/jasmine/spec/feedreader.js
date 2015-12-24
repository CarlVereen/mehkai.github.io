/* feedreader.js
 *Link to project Rubric https://www.udacity.com/course/viewer#!/c-nd001/l-3442558598/m-3380619337
 *Final feed - reader - testing
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* First suite for the app */
    describe('RSS Feeds', function() {
        /* First test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have a URL defined and are not empty', function() {

           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });
        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a name defined and the name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
         /* a test that loops through each feed
          * in the allFeeds object and ensures it has an assigned ID based on
          * the feeds index in the allFeeds array.
          */
         it('have an assigned ID that matches their index in the array', function() {
            allFeeds.forEach(function(feed, key) {
                expect(feed.id).toBeDefined();
                expect(key).toBe(feed.id);
            });
         });
    });


    /* a new test suite named for the Menu */
    describe('The Menu', function() {
      var  $body;

        /* a test that ensures the menu element is
         * hidden by default.
         */
         it('element is hidden by default', function() {
           $body = $('body').attr('class');
           expect($body).toBe('menu-hidden');
         });

         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('icon changes visibility when clicked', function() {
            //test first click opening menu
            $('#menu-button').trigger("click");
            $body = $('body').attr('class');
             expect($body).toBe('');
             //test second click closing menu
            $('#menu-button').trigger("click");
            $body = $('body').attr('class');
             expect($body).toBe('menu-hidden');
          });
    });

    /* a new test suite for the initial entries */
    describe('Initial Entries', function() {
      var entry;
        //setup initial entries
         beforeEach(function(done) {
           loadFeed(0, done);
         });
         /* a test that ensures when the loadFeed
          * function is called and completes its work, there is at least
          * a single .entry element within the .feed container.
          */
         it('there is at least one feed', function(done) {
           entry = $('.feed a').children('.entry');
           expect(entry.length).not.toBe(0);
           done();
         });
    });

    /* a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
      var entry,
          entryChanged;

         //setup initial load and capture the first entry
         beforeEach(function(done) {
           loadFeed(0, function() {
             entry = $('.entry').text();
             done();
           });
           loadFeed(1, function() {
             entryChanged = $('.entry').text();
             done();
           });
         });

         /* a test that ensures when a new feed is loaded
          * by the loadFeed function that the content actually changes.
          */
         it('should change content when new feed is selected', function() {
           expect(entry).not.toBe(entryChanged);
         });

         afterAll(function(done){
             //loading back the first feed
                 loadFeed(0, done);
         });
    });
    /*a new suite for future functionality and testing specs*/
    describe('Pending Specs and functionality', function() {
      /* a test that loops through each feed
       * in the allFeeds object and ensures it has a rating defined
       * and that the rating is not empty.
       */
        xit('all feeds have a rating', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.rating).toBeDefined();
            expect(feed.rating.length).not.toBe(0);
          });
        });
    });
}());
