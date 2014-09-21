This is a small javascript program that traps error in javascript globally and send that error in Google Analytics.

To use, just add the following in your HTML:

```html
	<script src="globalErrorTrap.js"></script>
	<script type="text/javascript">
		setupGA("UA-XXXXXXXX-X");
	</script>
```

with UA-XXXXXXXX-X as your google analytics Id.