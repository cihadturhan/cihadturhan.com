var URLParser = (function(document) {
    var COMPONENTS = 'protocol host hostname port pathname search hash href'.split(' ');
    var PROPS = COMPONENTS.concat('port requestUri parameters'.split(' '));
    var URI_PATTERN = /^((?:ht|f)tp(?:s?)?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/;
    var prependIf = function(value, char) {
        return value.indexOf(char) !== 0 ? char + value : value;
    };
    var parseParamVal = function(value, decode, convert) {
        if (decode) {
            value = decodeURI(value);
        }
        if (convert) {
            if (value.match(/^-?\d+$/)) {
                return parseInt(value, 10);
            } else if (value.match(/^-?\d+\.\d+$/)) {
                return parseFloat(value);
            }
        }
        return value;
    };
    var parseParams = function(query, decode, convert) {
        query = query.substring(1) || '';
        var params = {};
        var pairs = query.split('&');
        if (pairs[0].length > 1) {
            pairs.forEach(function(pair) {
                var param = pair.split("=");
                var key = decodeURI(param[0]);
                var val = parseParamVal(param[1], decode, convert);
                if (params[key] === undefined) {
                    params[key] = val;
                } else if (typeof params[key] === "string") {
                    params[key] = [params[key], val];
                } else {
                    params[key].push(val);
                }
            }, this);
        }
        return params;
    };
    var self = function(options) {
        options = options || {};
        this.decode = options.decode !== false; //default=true
        this.convert = options.convert !== false; //default=true
        this.debug = options.debug || false; //default=false
        this.domExists = document !== undefined;
        if (this.domExists) {
            this.aEl = document.createElement('a');
            this.location = window.location;
        }
    };
    self.prototype.parse = function(url) {
        var success = false;
        if (this.domExists && !this.debug) {
            this.aEl.href = url;
            if (this.aEl.host == "") {
                this.aEl.href = this.aEl.href;
            }
            //if (this.location.hostname !== this.aEl.hostname
            //        && this.location.pathname !== this.aEl.pathname) {
                COMPONENTS.forEach(function(prop) {
                    this[prop] = this.aEl[prop];
                }, this);
                success = true;
            //}
        } else {
            var match = url.match(URI_PATTERN);
            if (match) {
                COMPONENTS.forEach(function(component, index) {
                    this[component] = match[index + 1] || '';
                }, this);
                success = true;
            }
        }
        // Clean up and apply parameters
        if (success) {
            this.href = url;
            this.hash = this.hash.substr(1);
            this.pathname = prependIf(this.pathname, '/');
            this.requestUri = this.pathname + this.search;
            this.parameters = parseParams(this.search, this.decode, this.convert);
        } else {
            // Flush fields
            PROPS.forEach(function(component, index) {
                this[component] = '';
            }, this);
        }
        return this.toObj();
    };
    self.prototype.toObj = function() {
        var obj = {};
        PROPS.forEach(function(prop) {
            obj[prop] = this[prop];
        }, this);
        return obj;
    };
    self.prototype.toString = function() {
        return this.href;
    };
    return self;
})(document);