class UrlСonstructor {
  constructor(input) {
    this.url = input;
    this.baseUrl = this.url.split("?")[0];
    this.params = this.getExistingParams();
  }

  construct() {
    var res =
      Object.keys(this.params).length > 0 ? this.baseUrl + "?" : this.baseUrl;
    for (var key in this.params) {
      if (this.params.hasOwnProperty(key)) {
        res += key.toString() + "=" + encodeURI(this.params[key]) + "&";
      }
    }
    return Object.keys(this.params).length > 0 ? res.slice(0, -1) : res;
  }

  getExistingParams() {
    var qp = this.url.split("?");
    var paramList = {};
    if (qp.length > 1) {
      qp[1].split("&").map(function (value) {
        var pair = value.split("=");
        paramList[pair[0]] = pair[1];
      });
    }
    return paramList;
  }
}

let constructor = new UrlСonstructor("test.kz");
constructor.params.search = "what is love";

constructor.baseUrl = "test2.kz";
console.log(constructor.construct());
