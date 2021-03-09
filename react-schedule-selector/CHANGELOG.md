# Changelog

## v3.0

- component internally redesigned to use CSS Grid rather than Flexbox, resulting in cleaner markup and CSS
- component internally redesigned to use Typescript rather than Flow, package now includes TS type delcarations
- removes the `margin` prop in favor of `rowGap` and `columnGap` props
- adds `renderTimeLabel` and `renderDateLabel` render props for greater customizability of the labels
- component properly reacts to prop updates (previously changing certain props that control how many cells show up wouldn't trigger a refresh)
