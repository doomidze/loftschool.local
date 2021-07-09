# IDE customizing

## VSCode plugins:

- vscode-icons
- Bracket Pair Colorizer 2
- Auto Rename Tag
- auto close tag
- open in browser
- EditorConfig for VS Code
- css peek
- Import Cost
- settings sync


## Settings:
- save on focus (on)
- word wrap     (on)
- markdown      (!)
- snippets      (!)


## Commands:
- **ctrl+b**            - right sidebar
- **ctrl+p**            - current files
- **ctrl+shift+p**      - prefs
- **shift+alt+arrow**   - copy line
- **ctrl+shift+d**      - run(debug)
- **ctrl+shift+e**      - explorer
- **alt+left**          - back
- **ctrl+`**            - terminal
- **ctrl+1**            - editor
- **ctrl+q**            - list of views
- **Ctrl+Space**        - IntelliSense 



## Debugging
- **debugger**		(breakpoint in file)
- **breakpoints**	(debugger in browser)

- edit is file is Sources, ctrl+s, run script again
- в **watch** можно следить за переменными (например, сложить значения переменных на определенном участке брекпоинта)
- edit breakpoint(condition), temporary deactivate breakpoints
- **Event Listeners**

## Console in browser
- **console.log(el)**
- **console.trace()** показує послідовність дії скрипта

> - **$0($0 - $4)** - в консолі показує теперішній елемент веб-інспектора
> - **$('#el')**    - в консолі показує елемент

- **node filename.js**  (in terminal) - запуск файла
- **console.table(el)** (console/terminal) - console.log в таблиці(для массивів)

> - **console.time('timer')**       - speedtest of operation(just name)
```sh
some script
```
> - **console.timeEnd('timer')**    -end of test

- `web inspector -> network -> file preview`

## Interesting
> **arguments[0]** - содержит передающийся параметр для каждой функции внутри нее


| Plugin | README |
| ------ | ------ |
| [Markdown](https://guides.github.com/features/mastering-markdown) | github.com/features/mastering-markdown|
| GitHub | [plugins/github/README.md][PlGh] |