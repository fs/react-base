import gutil from 'gulp-util';
import notifier from 'node-notifier';

function notify(message) {
  notifier.notify({
    'title': 'React base',
    'message': message
  });
}

function log(message) {
  gutil.log(message);
}

export default {
  notify(message) {
    notify(message);
  },

  log(message) {
    log(message);
  },

  errorHandler(error) {
    const errorMessage = error.message;

    notify(errorMessage);
    log(errorMessage);
    this.emit('end');
  }
}
