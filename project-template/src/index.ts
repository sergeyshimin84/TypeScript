import { renderSearchFormBlock } from './search-form'
import { renderSearchStubBlock } from './search-results'
import { renderUserBlock } from './user'
import { renderToast } from './lib'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('User', '../public/avatar.png', 0);
  renderSearchFormBlock(dateFrom, dateTo);
  renderSearchStubBlock();
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
