var path = require("path")

module.exports = {
    outputDir: path.resolve(__dirname, "../backend/public/"),
    devServer: {
        proxy: {
            '/api':{
                target: 'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000',
                chageOrigin: true,
            },
            '/season':{
                target: 'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000',
                chageOrigin: true,
            },
            '/season_backgroud':{
                target: 'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000',
                chageOrigin: true,
            },
            '/players':{
                target: 'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000',
                chageOrigin: true,
            },
            '/top_record':{
                target: 'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000',
                chageOrigin: true,
            },
            '/top_record_combine':{
                target: 'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000',
                chageOrigin: true,
            },
            '/formation':{
                target: 'http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000',
                chageOrigin: true,
            }
        },
    },
    pluginOptions : {
        electronBuilder : {
            builderOptions : {
                nsis : {
                    shortcutName : 'FIFA4'
                },
                win : {
                    target: [
                        {
                            target : "nsis",
                            arch : [
                                'x64',
                                'ia32'
                            ]
                        }
                    ]
                }
            }
        }
    }
}
