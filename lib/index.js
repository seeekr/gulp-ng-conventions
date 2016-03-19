import through from 'through2'
import ngConventions from 'ng-conventions'
import path from 'path'
import gutil from 'gulp-util'
import fs from 'fs'

module.exports = function () {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file)
        }

        if (file.isStream()) {
            return cb(new gutil.PluginError('gulp-ng-conventions', 'Streaming not supported'));
        }

        file.contents = new Buffer(
            ngConventions(
                path.relative(file.base, file.path),
                String(file.contents),
                f => fs.existsSync(path.join(file.base, f))
            )
        )
        return cb(null, file)
    })
}
