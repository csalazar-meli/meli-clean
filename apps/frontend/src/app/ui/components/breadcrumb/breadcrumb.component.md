# Button Component

Render button with design of full-moon.

---

## Usage

`html`

```html
<full-moon-breadcrumb
  [breads]="viewModel.categories"
  (breadPressed)="onClickBread($event)"
></full-moon-breadcrumb>
```

## Properties

| breads      |                                |
| ----------- | ------------------------------ |
| Description | Set list of strings for breads |
| Attribute   | breads                         |
| Type        | `string[]`                     |
| Default     | `[]`                           |

## Event

| Name           | Description                                                              | $event   |
| -------------- | ------------------------------------------------------------------------ | -------- |
| `breadPressed` | Emitted when the user taps on the a bread, emit that bread text pressed. | `string` |
