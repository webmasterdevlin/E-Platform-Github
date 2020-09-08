# EPlatform

- Check out scripts in package.json to see different commands for running the app

<hr/>

## Features for MVP

- Offer classes and find users to sign up
- Virtual classroom, white board, screen sharing, text
- flag online, find me some students
- Schedules are planned and unplanned

<hr/>

## 3rd Party UI Components

- https://material-ui.com/
- https://themeforest.net/item/listeo-directory-listings-wordpress-theme/23239259 (HTML-CSS Template)

<hr/>

## State Management

- https://redux.js.org/

<hr/>

## Project Architecture

- components: any common reusable components like footer, navigation
- features: all features of application
- pages: each page of the application

<hr/>

## Project's color scheme

- primary color: <span style="color: #f91942">#f91942</span>

- secondary color: <span style="color: #b3d4fc">#b3d4fc</span>

color: <span style="color: #fff">#fff</span>

color: <span style="color: #66676b">#66676b</span>

color: <span style="color: #707070">#707070</span>

color: <span style="color: #223">#223</span>

color: <span style="color: #54ba1d">#54ba1d</span>

color: <span style="color: #ffc600">#ffc600</span>

<hr/>

## JS Libraries
- Redux
- Formik https://github.com/formium/formik
- Yup https://github.com/jquense/yup
- React Autosuggest https://github.com/moroshko/react-autosuggest
- https://www.npmjs.com/package/react-autosuggest
- Axios

## Do's

- Always create new branch and name it through this pattern 'yourName/task-or-feature'
- Keep container/smart components and presentational/dumb components separated
- Enable prettier extension/plugin in your IDE or editor
- Use Bootstrap or Material styling utilities as much as possible instead of inline css https://getbootstrap.com/docs/4.0/utilities/borders/ and https://material-ui.com/system/spacing/
- The Box tag of Material UI is like div with built in utility classes.
- Develop in modular fashion using common, features, and pages
- Avoid any type if possible
- Document by writing /\* \*/ comment above of a complicated function if necessary
- Check out hero feature that has Redux implementation http://localhost:3000/heroes

- Write components in Arrow Function Expression if components have props
```zsh
type Props = {
  name: string;
}
const MyComponent: React.FC<Props> = ({ name}) => <h1>Hello, {name}!</h1>
```

- Write components in Function Declaration if components don't have props

```zsh
function MyComponent() {
  return <h1>Hello, world!</h1>
}
```
- Prefer type aliases instead of interfaces

##### type alias
```zsh
type Props = {
  // properties
} & BaseType; // to extend Props
```

##### interface
```zsh
interfaces IProps extends BaseType {
  // properties
}
```

## Dont's
- Don'to write class components


### Extra info

- Listio's CSS files are style.css, main-color.css, bootstrap-grid.css, plugins/revolutionslider.css, colors, and fonts
- Listio's JS files are in the scripts
- These CSS and JS are placed in the right directory level because of their dependencies to each other.
