# Проект: Место

### Ссылка на проект GitHub Pages: https://paulflesh.github.io/mesto-project/

Теперь свойство "display: flex" у .popup, а у .popup_opened убран вовсе.
Сами же окна попапа переключаются НЕ через *.classList.add (remove), а через *.classList.toggle.

Попапы плавно открываются/закрываются с помощью visibility и transition.

В секцию с карточками рендерятся карточки из готового массива через template. Новые карточки, сделанные из модального окна добавляются в начало списка.
