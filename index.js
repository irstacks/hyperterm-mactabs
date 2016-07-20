'use strict'

const tabShadowSize = '15px';
const css = `
    .tabs_nav .tabs_list .tab_active:before {
        border-bottom: 1px solid #F81CE5 !important;
        border-bottom: 1px solid #F81CE5 !important;
    }
`;
exports.decorateConfig = config => {
    return Object.assign({}, config, {
        css: (config.css || '') + css
    });
}
