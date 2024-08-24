# eslint-plugin-jlc

jlc eslint rule

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-jlc`:

```sh
npm install eslint-plugin-jlc --save-dev
```

## Usage

Add `jlc` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["jlc"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "jlc/rule-name": 2
  }
}
```

## Configurations

<!-- begin auto-generated configs list -->

TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).

<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

TODO: Run eslint-doc-generator to generate the rules list.

<!-- end auto-generated rules list -->

## Progress

- [ ] [强制]目录、JS、CSS、SCSS、HTML、TS、Vue 及静态文件命名：全部采用小写方式， 以中划线分隔（kebab-case）
- [ ] [强制]Vue 的组件使用名称及标签值：全部采用小写方式， 以中划线分隔（kebab-case）
- [ ] [强制]变量和函数、参数命名：全部采用小写驼峰命名（camelCase），代码中的命名开头结尾不允许使用下划线或符号（系统级命名除外）
- [ ] [强制]export 结构体/类/单例/函数库/对象：采用大写驼峰命名（PascalCase ）
- [x] [强制]变量、常量声明：不推荐使用 var，全局变量使用 let；常量使用 const
- [x] [强制]禁用 Function 构造函数创建函数，不过可以使用函数表达式
- [ ] [强制]promise 不要嵌套，可以使用 aync/await 进行处理，逻辑更清晰
- [x] [建议]字符串拼接：推荐使用 es6 字符串模版字面量进行拼接
- [x] [建议]比较运算符：始终使用 === 和 !==；避免使用 == 和 !=
- [ ] [建议]尽量避免使用!important
