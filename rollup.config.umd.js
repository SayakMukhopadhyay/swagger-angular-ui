import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript2';

const sass = require('node-sass');
const config = require('./config-library.js');
export default {
    entry: config.PATH_SRC + 'index.ts',
    format: 'umd',
    moduleName: config.nameLibrary,
    sourceMap: true,
    external: [
        '@angular/core',
        '@angular/animations',
        '@angular/common',
        '@angular/forms',
        'clarity-angular',
        'clarity-icons',
        'clarity-ui',
        'rxjs'
    ],
    dest: config.PATH_DIST + config.nameLibrary + ".umd.js",
    plugins: [
        angular({
            preprocessors: {
                template: template => template,
                style: scss => {
                    let css;
                    if (scss) {
                        css = sass.renderSync({ data: scss }).css.toString();
                    } else {
                        css = '';
                    }
                    return css;
                },
            }
        }),
        typescript({
            clean: true,
            typescript: require("typescript")
        }),
        resolve({
            module: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
        })
    ],
    onwarn: warning => {
        const skip_codes = [
            'THIS_IS_UNDEFINED',
            'MISSING_GLOBAL_NAME'
        ];
        if (skip_codes.indexOf(warning.code) != -1) return;
        console.error(warning);
    }
};
