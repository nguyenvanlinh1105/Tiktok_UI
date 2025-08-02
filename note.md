# Sau khi khởi tạo project thì hạ react và react-dom xuống version 18.2.0 hoặc 18.1.0 cho ổn định 

# B1: cài customize-cra 
## Để customize được webpack thì ta phải sử dụng đến thư viện customize-cra 
### Cài đặt npm i customize-cra react-app-rewired -D
## - config 
- https://github.com/arackaf/customize-cra
### Tạo một file config-override.js từ thư mục chính và dán nội dung sau vào (https://github.com/timarney/react-app-rewired/)
    /* config-overrides.js */

    module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return config;
    }

# B2: Cài đặt babel-plugin-module-resolver
    - https://github.com/tleunen/babel-plugin-module-resolver
cài: npm install --save-dev babel-plugin-module-resolver
## Tạo một file .babelrc ngang hàng với root và dán nội dung bên dưới vào 
    {
    "plugins": [
        ["module-resolver", {
        "root": ["./src"],
        "alias": {
            "test": "./test",
            "underscore": "lodash"
        }
        }]
    ]
    }
## để có thể tự động gọi í code khi sử dụng babel-plugin thì làm như sau 
### b1: Tạo jsconfig.json ngang hàng với root  
### b2: thêm đoạn code dưới vào file 
    {
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
        "*": ["src/*"],
        "test/*": ["test/*"],
        "underscore": ["lodash"]
        }
    }
    }

# B3: Cài đặt và cấu hình Prettier (format lại code)

## tạo file .prettierrc tại thư mục src và dán code vào 
    {
        "arrowParens": "always",
        "bracketSameLine": false,
        "bracketSpacing": true,
        "embeddedLanguageFormatting": "auto",
        "htmlWhitespaceSensitivity": "css",
        "insertPragma": false,
        "jsxSingleQuote": false,
        "printWidth": 120,
        "proseWrap": "preserve",
        "quoteProps": "as-needed",
        "requirePragma": false,
        "semi": true,
        "singleQuote": true,
        "tabWidth": 4,
        "trailingComma": "all",
        "useTabs": false,
        "vueIndentScriptAndStyle": false
    }
## tạo file setting.json (.vscode/settings.json) thêm code bên dưới vào 

    {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
# B4 : Cấu hình sử dụng CSS/ SASS 
cài SASS: npm i -D sass
cài normalize.css : npm i normalize.css


# B5: phân tích tổng quan tiktok 
## Layout: 
## cài react-router-dom@6 :npm i react-router-dom@6
## đua router ra ngoài 
## xây dựng cơ chế tải layout 
