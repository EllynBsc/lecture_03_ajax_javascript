//1. import the code of the plugin markdownit from the node modules
import MarkdownIt from 'markdown-it';

//2.use the code
const initMarkdown = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const markdown = new MarkdownIt();
  textarea.addEventListener('keyup', (event) => {
    preview.innerHTML = markdown.render(textarea.value);
  });
};

//3.export it in the index.js
export { initMarkdown };
