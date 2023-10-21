# About the challenge

<p>
You need to make a div disappear on hovering over it but it's display should be set to none, i,e. it should not be rendered at all and there should be a button which should set the display back to block for the div. Give a smooth transition for both these operations.
</p>

## Take the following into consideration

### Care should be taken when using a transition immediately after:

<ul>
<li>adding the element to the DOM using .appendChild()</li>
<li>removing an element's display: none; property.</li>
</ul>

<p>This is treated as if the initial state had never occurred and the element was always in its final state.
</p>
