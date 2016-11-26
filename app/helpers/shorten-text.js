import Ember from 'ember';

export function shortenText(txt) {
  let maxLength     = 200;
  let text          = Ember.String.htmlSafe(txt);
  let trimmedString = text.toString().substr(0, maxLength);
  trimmedString     = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + ' ...';

  return Ember.String.htmlSafe(trimmedString); // prevent xss and ...
}

export default Ember.Helper.helper(shortenText);
