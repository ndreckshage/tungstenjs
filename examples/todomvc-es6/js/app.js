import { AppView } from './views/todo_app_view';
import { AppModel } from './models/todo_app_model';
import template from '../templates/todo_app_view.mustache';

new AppView({
  el: '#appwrapper',
  template: template,
  model: new AppModel({
    todoItems: [{title: 'lorem ipsum'}, {title: 'foo'}],
    todoCount: 2
  }),
  dynamicInitialize: true
});