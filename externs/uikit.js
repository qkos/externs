/**
 * @fileoverview Externs for UIKit by Vision Media
 * @see https://github.com/visionmedia/uikit
 * @see http://visionmedia.github.com/uikit/
 * @externs
 *
 * @author Qamal Kosim-Satyaputra
 */
 
/** @const */
var ui = {};

// === EMITTER COMPONENT ===

/**
 * @constructor
 */
ui.Emitter = function() {};

/**
 * @param {string} event
 * @param {function} fn
 * @return {ui.Emitter}
 */
ui.Emitter.prototype.on = function(event, fn) {};

/**
 * @param {string} event
 * @param {function} fn
 * @return {ui.Emitter}
 * @api public
 */
ui.Emitter.prototype.once = function(event, fn) {};

/**
 * @param {string} event
 * @param {function} fn
 * @return {ui.Emitter}
 */
ui.Emitter.prototype.off = function(event, fn) {};

/**
 * @param {string} event
 * @param {...*} var_args
 * @return {ui.Emitter} 
 */
ui.Emitter.prototype.emit = function(event) {};

// === DIALOG COMPONENT ===

/**
 * @extends {ui.Emitter}
 * @constructor
 * @param {Object} options
 */
ui.Dialog = function(options) {};

/**
 * @param {Object} options
 */
ui.Dialog.prototype.render = function(options) {};

/**
 * @return {ui.Dialog}
 */
ui.Dialog.prototype.closable = function() {};

/**
 * @param {string} type
 * @return {ui.Dialog}
 */
ui.Dialog.prototype.effect = function(type) {};

/**
 * @return {ui.Dialog}
 */
ui.Dialog.prototype.modal = function() {};

/**
 * @return {ui.Dialog}
 */
ui.Dialog.prototype.overlay = function() {};

/**
 * @return {ui.Dialog}
 */
ui.Dialog.prototype.show = function() {};

/**
 * @return {number} ms
 * @return {ui.Dialog}
 */
ui.Dialog.prototype.hide = function(ms) {};

/**
 * @return {ui.Dialog}
 */
ui.Dialog.prototype.remove = function() {};

/**
 * @param {string} title_msg
 * @param {string=} opt_msg
 * @return {ui.Dialog}
 */
ui.dialog = function(title_msg, opt_msg) {};

// === CARD COMPONENT ===

/**
 * @param {*} front
 * @param {*} back
 * @return {ui.Card}
 */
ui.card = function(front, back) {};

/**
 * @extends {ui.Emitter}
 * @constructor
 * @param {*} front
 * @param {*} back
 */
ui.Card = function(front, back) {};

/**
 * @param {*} val
 * @return {ui.Card}
 */
ui.Card.prototype.front = function(val) {};

/**
 * @param {*} val
 * @return {ui.Card}
 */
ui.Card.prototype.back = function(val) {};

/**
 * @return {ui.Card}
 */
ui.Card.prototype.flip = function() {};

/**
 * @param {string} type
 * @return {ui.Card}
 */
ui.Card.prototype.effect = function(type) {};

/**
 * @param {Object} options
 */
ui.Card.prototype.render = function(options) {}

// === COLORPICKER COMPONENT ===

/**
 * @extends {ui.Emitter}
 * @constructor
 */
ui.Colorpicker = function() {};

/**
 * @param {number} n
 * @return {ui.ColorPicker}
 */
ui.ColorPicker.prototype.size = function(n) {};

/**
 * @param {number} n
 * @return {ui.ColorPicker}
 */
ui.ColorPicker.prototype.width = function(n) {};

/**
 * @param {number} n
 * @return {ui.ColorPicker}
 */
ui.ColorPicker.prototype.height = function(n) {};

/**
 * @param {string} color
 * @return {string|ui.ColorPicker}
 */
ui.ColorPicker.prototype.color = function(color) {};

/**
 * @param {string} color
 * @return {string|ui.ColorPicker}
 */
ui.ColorPicker.prototype.hue = function(color) {};

/**
 * @param {Object} options
 */
ui.ColorPicker.prototype.render = function(options) {};

// === CONFIRMATION COMPONENT ===

/**
 * @param {string} title_msg
 * @param {string=} opt_msg
 * @return {ui.Confirmation}
 */
ui.confirm = function(title_msg, opt_msg) {};

/**
 * @extends {ui.Dialog}
 * @constructor
 * @param {Object} options
 */
ui.Confirmation = function(options) {};

/**
 * @param {string} text
 * @return {ui.Confirmation}
 */
ui.Confirmation.prototype.cancel = function(text) {};

/**
 * @param {string} text
 * @return {ui.Confirmation}
 */
ui.Confirmation.prototype.ok = function(text) {};

/**
 * @param {function} fn
 * @return {ui.Confirmation}
 */
ui.Confirmation.prototype.show = function(fn) {};

/**
 * @param {Object} options
 */
ui.Confirmation.prototype.render = function(options) {};

// === MENU COMPONENT ===

/**
 * @return {ui.Menu}
 */
ui.menu = function() {};

/**
 * @extends {ui.Emitter}
 * @constructor
 */
ui.Menu = function() {};

/**
 * @param {string} text
 * @param {function} fn
 * @return {ui.Menu}
 */
ui.Menu.prototype.add = function(text, fn) {}; 

/**
 * @param {string} text
 * @return {ui.Menu}
 */
ui.Menu.prototype.remove = function(text) {};

/**
 * @param {string} text
 * @return {boolean}
 */
ui.Menu.prototype.has = function(text) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {ui.Menu}
 */
ui.Menu.prototype.moveTo = function(x, y) {};

/**
 * @return {ui.Menu}
 */
ui.Menu.prototype.show = function() {};

/**
 * @return {ui.Menu}
 */
ui.Menu.prototype.hide = function() {};

// === NOTIFICATION COMPONENT ===

/**
 * @param {String} title or msg
 * @param {String} msg
 * @return {ui.Notification}
 */
 
ui.notify = function(title, msg) {};
/**
 * @param {String} title or msg
 * @param {String} msg
 * @return {ui.Notification}
 */
ui.info = function(title, msg) {};

/**
 * @param {String} title or msg
 * @param {String} msg
 * @return {ui.Notification}
 */
ui.warn = function(title, msg) {};

/**
 * @param {String} title or msg
 * @param {String} msg
 * @return {ui.Notification}
 */
ui.error = function(title, msg) {};

/**
 * @extends {ui.Emitter}
 * @constructor
 * @param {Object} options
 */
ui.Notification = function(options) {};

/**
 * @param {Object} options
 */
ui.Notification.prototype.render = function(options) {};

/**
 * @return {ui.Notification}
 */
ui.Notification.prototype.closable = function() {};

/**
 * @param {string} type
 * @return {ui.Notification}
 */
ui.Notification.prototype.effect = function(type) {};

/**
 * @return {ui.Notification}
 */
ui.Notification.prototype.show = function() {};

/**
 * @param {string} type
 * @return {ui.Notification}
 */
ui.Notification.prototype.type = function(type) {};

/**
 * @return {ui.Notification}
 */
ui.Notification.prototype.sticky = function() {};

/**
 * @return {number} ms
 * @return {ui.Notification}
 */
ui.Notification.prototype.hide = function(ms) {};

/**
 * @return {ui.Notification}
 */
ui.Notification.prototype.remove = function() {};

// === OVERLAY COMPONENT ===

/**
 * @param {Object} options
 * @return {ui.Overlay}
 */
ui.overlay = function(options) {};

/**
 * @extends {ui.Emitter}
 * @constructor
 * @param {Object} options
 */
ui.Overlay = function(options) {};

/**
 * @return {ui.Overlay}
 */
ui.Overlay.prototype.show = function() {};

/**
 * @return {ui.Overlay}
 */
ui.Overlay.prototype.hide = function() {};

// === SPLITBUTTON COMPONENT ===

/**
 * @extends {ui.Emitter}
 * @constructor
 * @param {string} label
 */
ui.SplitButton = function(label) {}

/**
 * @return {ui.SplitButton}
 */
ui.SplitButton.prototype.toggle = function() {};

/**
 * @return {ui.SplitButton}
 */
ui.SplitButton.prototype.show = function() {};

/**
 * @return {ui.SplitButton}
 */
ui.SplitButton.prototype.hide = function() {};

/**
 * @param {Object} options
 * @return {ui.SplitButton}
 */
ui.SplitButton.prototype.render = function(options) {};
