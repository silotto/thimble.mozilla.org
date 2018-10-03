/* globals $: true */

var $ = require("jquery");

module.exports = {
  init: function() {
    let banner = $(".glitch-banner");
    if (banner.length > 0) {

      console.log("banner", banner);

      let cta = $(".glitch-cta.underlay");
      if (cta.length > 0) {
        var close = $(".glitch-cta .cta-close");
        close.click(() => {
          banner.removeClass("hidden");
          cta.addClass("hidden");
        });
        cta.removeClass("hidden");
      }

      else {
        banner.removeClass("hidden");
      }
    }
  }
};
