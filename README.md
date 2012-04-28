### Glue.js is for creating quick, beautiful prototypes. Here’s why it’s awesome:
<ul >
  <li>
    <strong>HTML partials served up with AJAX</strong>
    Glue lets you break up your markup into external HTML files for better organization, much like you would with CSS or JS. That means you can organize your HTML however you like, plus run and share it with just JS. No need for PHP, a Node server or anything like that.
  </li>
  <li>
    <strong>Single-page prototype with page animations</strong>
    Clicking from page to page in a Glue prototype all works without page refreshes, meaning you can use CSS to add transitions between pages. Don’t worry, you still have working, sensable URLs even though the whole prototype is technically on one page.
  </li>
  <li>
    <strong>It’s stupid fast, easy and lightweight</strong>
    Link up a single 1.5kb JS file (plus an optional 1kb CSS file) and you’re ready to go. As soon as Glue is loaded, it AJAX's any included HTML and then fades the page in as a whole. Glue's syntax was designed for semantic simplicity, so it’s extremely easy to learn and read.
  </li>
</ul>

### Using Glue is super simple. There are only 3 things you need to know:
<ol >
<li>
  <strong>data-glue-src is for partials</strong>
  Use the “data-glue-src” attribute on any element to replace its content with HTML from the template you specifiy when the page loads.
<code>&lt;div data-glue-src=&quot;navbar&quot;&gt;</code>
</li>
<li>
  <strong>Glue-link is for links to new pages</strong>
  Put a “data-glue-link” attribute on an anchor to clear the existing page and replace it with the new one you specify.
<code>&lt;a glue-link=”page2”&gt;Go to the next page&lt;/a&gt;</code>
</li>
<li>
  <strong>The .glue-container in your index.html is important</strong>
  Any content that is going to change from page to page will be loaded into the .glue-container, so leave it in your index.html. Any templates outside of this will persist on every page.
<code>&lt;div class=&quot;data-glue-container&quot;&gt;&lt;/div&gt;</code>
</li>
</ol>


### Get started now with just 3 super simple steps:
<ol>
  <li>
    <strong>Download or clone Glue</strong>
    You can just <a href="https://github.com/dhgamache/Glue/zipball/master">download the project</a> with these docs or feel free to check out <a href="https://www.github.com/dhgamache/glue">the Github page</a> and clone it.
  </li>
  <li>
    <strong>Run a server of any kind (don’t worry, it’s easy)</strong>
    Unfortunately, all browsers consider AJAXing local files to be a security threat if not in a server environment. It’s super easy to solve this though. <strong>If you’re on a Mac</strong>, just open terminal, drag your prototype folder onto the terminal icon in your doc and run this command:
<code class="code-snippet short-bottom">python -m SimpleHTTPServer</code>
  Alternatively, turning on web sharing, using MAMP or any other server will work.  If you’re on a Windows machine &hellip;
  </li>
  <li>
    <strong>Open your browser and go to your server address</strong>
    However you set up your simple server, just point your browser at the appropriate localhost port and you should see the Glue docs. For reference, the standard python server URL will be localhost:8000.
  </li>
</ol>