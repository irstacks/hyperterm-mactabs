'use strict'

const tabShadowSize = '15px';
const css = `
    .tabs_nav .tabs_list .tab_active:before {
        border-bottom-color: #fff !important;
        border-bottom-color: #fff !important;
    }
`;
exports.decorateConfig = config => {
    return Object.assign({}, config, {
        css: (config.css || '') + css
    });
}
