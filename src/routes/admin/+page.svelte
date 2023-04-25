<script>
import { renderStudio,defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
      
const config = defineConfig({
  plugins: [deskTool()],
  name: "admin-ae",
  projectId: "l0i6s4jf",
  dataset: "production",
  schema: {
    types: [
      {
        type: "document",
        name: "post",
        title: "Post",
        fields: [
          {
            type: "string",
            name: "title",
            title: "Title"
          }
        ]
      }
    ]
  }
});

// This assumes that there is a <div id="app"></div> node in the HTML structure where this code is executed.
renderStudio(document.getElementById("app"), config);
</script>
<div id="app"></div> 
<h1>HI</h1>
<style>
    /* This assumes no margin or padding on #app's parent(s) */
#app {
  height: 100vh;
  max-height: 100dvh;
  overscroll-behavior: none;
  -webkit-font-smoothing: antialiased;
  overflow: auto;
}
</style>