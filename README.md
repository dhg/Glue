### Using Glue is super simple. There are only three things you need to know:
<ol >
<li>
  ##### Glue-src is for partials
  Use the “glue-src” attribute on any element to replace its content with HTML from the template you specifiy when the page loads.
<code>&lt;div glue-src=&quot;navbar&quot;&gt;</code>
</li>
<li>
  ##### Glue-link is for links to new pages
  Put a “glue-link” attribute on an anchor to clear the existing page and replace it with the new one you specify.
<code>&lt;a glue-link=”page2”&gt;Go to the next page&lt;/a&gt;</code>
</li>
<li>
  ##### The .glue-container in your index.html is important
  Any content that is going to change from page to page will be loaded into the .glue-container, so leave it in your index.html. Any templates outside of this will persist on every page.
<code>&lt;div class=&quot;glue-container&quot;&gt;&lt;/div&gt;</code>
</li>
</ol>