# Don&#39;t change a component&#39;s appearance or layout. (dont-add-classes-to-components)

Adding a class to change a component makes Patterns upgrades more unpredictable, leading to painful regression testing and fixing.

Components should always behave/look the same, regardless of where they are placed. Spacing and limiting widths should be controlled by the parent grid, spacing or container components. If the UI needs to look different, that should be built into the system or completely custom. If it needs to be completely custom, why doesn't it fit the design system?

## Why can't I just add a class?

- Adding a class means the component doesn't fit your needs. Should this be fixed once, properly, inside the component, or is the style not a concern of the component? If it's not a concern of the component, it shouldn't be applied to the component.
- Changing styles of components means they behave differently in different contexts, making refactoring dangerous. We don't know what styles people are adding. The source of truth for a components behaviour should be solely inside Patterns.
- Inline styles that are loaded at the point of use mean CSS is loaded in different orders on different pages in different states. With single class BEM selectors, if there are conflicting styles on the same element, we can get different display results depending on the load order. This is dangerous and hard to debug.
- Encouraging patching something "just here" by adding a class results in duplicated "just here" fixes that could have been solved once in the design system.

## Rule Details

Examples of **incorrect** code for this rule:

```jsx

<MCard class="custom-spacing" />

```

Examples of **correct** code for this rule:

```js

<MSpacing bottom="lg">
  <MCard />
</MSpacing>

```