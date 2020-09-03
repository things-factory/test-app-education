process.on('bootstrap-module-history-fallback', (app, fallbackOption) => {
    /*
     * fallback white list를 추가할 수 있다
     *
     * ex)
     * var paths = [
     *   'aaa',
     *   'bbb'
     * ]
     * fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
     */
});
process.on('bootstrap-module-route', (app, routes) => {
    /*
     * koa application에 routes 를 추가할 수 있다.
     *
     * ex) routes.get('/path', async(context, next) => {})
     * ex) routes.post('/path', async(context, next) => {})
     */
});
//# sourceMappingURL=routes.js.map