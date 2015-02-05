System.config({
  "baseURL": "/test",
  "transpiler": "6to5",
  "paths": {
    "*": "*.js",
    "plugin-hamljs/*": "../lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "haml": "npm:haml@0.4.3",
    "hamljs": "plugin-hamljs/plugin-hamljs",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:haml@0.4.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

