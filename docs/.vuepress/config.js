module.exports = {
    title: 'Spider-Flow开发文档',
    description: '规范spider-flow爬虫模板的命名与zabbix互通',
    themeConfig: {
        sidebar: 'auto',
        nav: [{
                text: '命名规范',
                link: '/naming-help/'

            }, {
                text: '模板开发',
                link: '/develop/'

            }
        ]
    },
    plugins: ['@vuepress/active-header-links', '@vuepress/back-to-top']
}
