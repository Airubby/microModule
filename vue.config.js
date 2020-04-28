const isProduction = process.env.NODE_ENV === 'production';
const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'element-ui': 'ELEMENT',
    'swiper':'Swiper',
    'echarts':'echarts',
    'THREE':'three',
    'el-table-pagination':'elTablePagination'
}
// CDN外链，会插入到index.html中 打包的时候去掉main.js中的elTablePagination引用
const cdn = {
    // 开发环境
    dev: {
      css: [
        '/nodepackage/element-ui/lib/theme-chalk/index.css',
        '/nodepackage/swiper/css/swiper.min.css'
      ],
      js: []
    },
    // 生产环境
    build: {
      css: [
        '/nodepackage/element-ui/lib/theme-chalk/index.css',
        '/nodepackage/swiper/css/swiper.min.css'
      ],
      js: [
        '/nodepackage/vue/dist/vue.min.js',
        '/nodepackage/vue-router/dist/vue-router.min.js',
        '/nodepackage/vuex/dist/vuex.min.js',
        '/nodepackage/axios/dist/axios.min.js',
        '/nodepackage/element-ui/lib/index.js',
        '/nodepackage/swiper/js/swiper.min.js',
        '/nodepackage/echarts/dist/echarts.min.js',
        '/nodepackage/three/build/three.min.js',
        '/nodepackage/el-table-pagination/lib/index.js',
      ]
    }
}
module.exports = {
    // 基本路径
    publicPath: '/',
    //baseUrl: process.env.NODE_ENV === "production" ? "./" : "/"
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: (config) => {
         /**
         * 添加CDN参数/将externals定义的不需要Webpack打包编译的到htmlWebpackPlugin配置中，
         */
        config
            .plugin('html')
            .tap(args => {
            if (isProduction) {
                args[0].cdn = cdn.build
            }
            if (!isProduction) {
                args[0].cdn = cdn.dev
            }
            return args
            })
    },
    configureWebpack: (config) => {
        const myConfig = {}
        if (isProduction) {
            // 1. 生产环境npm包转CDN，externals定义的部分不需要Webpack打包编译
            myConfig.externals = externals
            //3.js代码整合
            let optimization= {
                //整合代码
                splitChunks: {
                    cacheGroups: {
                        vendor:{
                            chunks:"all",
                            test: /node_modules/,
                            name:"vendor",
                            minChunks: 1,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority:100,
                        },
                        common: {
                            chunks:"all",
                            test:/[\\/]src[\\/]js[\\/]/,
                            name: "common",
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority:60
                        },
                        styles: {
                            name: 'styles',
                            test: /\.(le|sa|sc|c)ss$/,
                            chunks: 'all',
                            enforce: true,
                        },
                        runtimeChunk: {
                            name: 'manifest'
                        }
                    } 
                },
                
            }
            Object.assign(config, {
                optimization
            })
        }
        return myConfig
        // if (process.env.NODE_ENV === 'production') {
        //     // 为生产环境修改配置...
        //     config.mode = 'production';
        // } else {
        //     // 为开发环境修改配置...
        //     config.mode = 'development';
        // }
        // Object.assign(config, {
        //     // 开发生产共同配置
        //     resolve: {
        //         alias: {
        //             '@': path.resolve(__dirname, './src'),
        //         }
        //     }
        // });
    },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            //为每个css引入公共需要引入的样式
            // less:{
            //     data:`@import "@/assets/public.less"`
            // }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8081,
        https: false,
        hotOnly: false,
        // 设置代理
        // proxy: {
        //     // '/api': {
        //     // target: 'https://cnodejs.org', // 你接口的域名
        //     //     secure: false, // 如果是https接口，需要配置这个参数
        //     //     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        //     //     pathRewrite:{
        //     //     '^/api':'/api/v1/'
        //     //     }
		//     // }
        // },
        before: app => {
        }
    },
    // 第三方插件配置
    pluginOptions: {}
}