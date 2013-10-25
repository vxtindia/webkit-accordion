# Webkit Accordion

A tiny jQuery plugin, with minimal [semantic] markup, for generating hardware accelerated CSS transition accordions, making them perfectly suited for mobile webkit web/PhoneGap apps.

## Usage

```
var setHeight = $('dl').accordion();

<dl>
	<dt id="c1"><a href="#c1">Your link title</a></dt>
	<dd>
		<p>Your content.</p>
	</dd>
	<dt id="c2"><a href="#c2">Your link title</dt>
	<dd>
		<p>Your content.</p>
	</dd>
</dl>

<script>
  // Call setHeight to set the computed height anytime
  setTimeout(function() {
    setHeight();
  }, 5000);
</script>
```